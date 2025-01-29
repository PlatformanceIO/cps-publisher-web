import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import RetoolIframe from '@/components/Retool';
import Navbar from '@/components/Navbar';

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  const userAccess = (user?.publicMetadata?.['product-access'] || []) as Array<{
    title: string;
  }>;

  if (!userAccess.some((elem) => elem.title === 'cps-publisher')) {
    redirect('/not-authorized');
  }
  const { getToken } = await auth();

  const token = await getToken({ template: 'default' });
  console.log({ token });

  let response = await fetch(`${process.env.CORE_API_URL}/v1/auth/activate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  });

  let responseJson = await response.json();

  console.log({ responseJson });

  const data: { accessToken: string } = responseJson?.data?.token;

  console.log({ data });

  response = await fetch(
    `https://portal.app.platformance.io/api/embed-url/external-user`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RETOOL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        landingPageUuid: process.env.RETOOL_LANDING_PAGE_UUID,

        groupIds: [process.env.RETOOL_GROUP_ID],
        externalIdentifier: user.id,
        userInfo: {
          email: user.emailAddresses[0].emailAddress,
          firstName: user?.firstName || '',
          lastName: user?.lastName || '',
        },
      }),
    }
  );
  responseJson = await response.json();

  console.log({ responseJson });

  const embedUrl = responseJson.embedUrl;

  return (
    <div>
      <Navbar />
      <RetoolIframe url={embedUrl} data={data} />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function NotAuthorizedPage() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  const userAccess = (user?.publicMetadata?.['product-access'] || []) as Array<{
    title: string;
  }>;
  if (userAccess.some((elem) => elem.title === 'cps-publisher')) {
    redirect('/app');
  }
  return (
    <>
      <Navbar />
      <div className='flex justify-center py-24'>
        <div className='border p-5 rounded shadow-md'>
          <p className='text-gray-700 dark:text-gray-200'>
            You are not authorized to access the app, Please contact admin!
          </p>
        </div>
      </div>
    </>
  );
}

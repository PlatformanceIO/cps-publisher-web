import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function Page() {
  return (
    <div className='flex min-h-screen'>
      <div className='md:w-[40%] flex flex-col items-center justify-center p-8 bg-[#081830]'>
        <SignUp
          signInUrl='/sign-in'
          fallbackRedirectUrl='/app'
          appearance={{
            baseTheme: dark,
            elements: {
              card: 'bg-[#081830]',
              input: 'bg-[#0d2242c2]',
            },
          }}
        />
      </div>
    </div>
  );
}

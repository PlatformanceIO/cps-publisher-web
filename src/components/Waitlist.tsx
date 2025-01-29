'use client';

import { joinWaitlist } from '@/actions/join-waitlist';
import { useFormState } from 'react-dom';
import FormButton from './FormButton';
import Link from 'next/link';

export default function WaitlistForm() {
  const [formState, action] = useFormState(joinWaitlist, {
    errors: {},
    data: {},
  });

  if (!formState.data?.success) {
    return (
      <>
        <form action={action}>
          <div className='flex flex-col justify-start gap-[1.5rem] w-max-[calc(-2.5rem+100vw)] w-[20rem] text-xs font-medium'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='text-[#2F3A56] font-gilroyRegular text-[14px]'
              >
                Email Address
              </label>
              <input
                id='email'
                name='email'
                placeholder='Enter your email address'
                className='px-[0.75rem] py-[0.375rem] font-poppinsRegular rounded-md h-10  text-[14px] bg-white border border-[#2F3A56] text-[#2F3A56] hover:border-gray-600'
              />
              {formState?.errors?.email?.length && (
                <p className='border- border-red-500 bg-red-300 p-2 rounded text-black'>
                  {formState.errors.email?.join(', ')}
                </p>
              )}
              {formState?.errors?._form?.length && (
                <p className='border- border-red-500 bg-red-300 p-2 rounded text-black'>
                  {formState.errors._form?.join(', ')}
                </p>
              )}
            </div>
            <FormButton
              text='Join waitlist'
              className='rounded bg-[#20299B] text-white font-gilroyMedium text-[14px] h-10 px-[0.75rem] py-[0.375rem]'
            />
          </div>
        </form>
        <div className='text-xs'>
          <p className='text-[#98A2B3] text-[16px] font-gilroyRegular'>
            Already have an account?{' '}
            <span className='font-gilroyBold text-[#051931] hover:underline'>
              <Link href='/sign-in'>Sign In</Link>
            </span>
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className='border p-5 rounded shadow-md'>
        <p className='text-gray-300 font-gilroyRegular'>
          We’ve received your request and will notify you as soon as your spot
          becomes available. Stay tuned for updates! 🎉
        </p>
      </div>
    </div>
  );
}

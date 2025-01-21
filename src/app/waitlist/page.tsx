import Image from 'next/image';
import logo from '@/public/logo.svg';
import WaitlistForm from '@/components/Waitlist';
import BackgroundVideo from '@/components/BackgroundVideo';
import Checkbox from '@/components/svg/Checkbox';

export default function WaitlistPage() {
  return (
    <div className='flex min-h-screen'>
      <div className='hidden md:block md:w-[65%] relative'>
        <BackgroundVideo />
        <div className='h-full flex flex-col p-10 absolute z-50 top-0'>
          <div className='nav'>
            <Image
              src={logo}
              className='text-white mt-6 ml-6'
              alt='logo'
              height={50}
            />
          </div>
          <div className='flex flex-col justify-end pb-10 h-full ml-5'>
            <h1 className='text-[2.5rem] text-white font-gilroyBold leading-snug'>
              Supercharge your business growth<br></br>with Platformance Ads
            </h1>
            <div className='flex  flex-row gap-4 mt-10'>
              <div className='flex items-center bg-white rounded-full px-3 py-2'>
                <Checkbox className='fill-[#0053F3]' />
                <p className='text-[#4B4B4B] font-gilroyMedium text-sm pl-2'>
                  Your command center for success
                </p>
              </div>
              <div className='flex items-center bg-white rounded-full px-3 py-2'>
                <Checkbox className='fill-[#0053F3]' />
                <p className='text-[#4B4B4B] font-gilroyMedium text-sm pl-2'>
                  Plan campaigns that exceed every goal
                </p>
              </div>
            </div>
            <div className='flex  flex-row gap-4 mt-4'>
              <div className='flex items-center bg-white rounded-full px-3 py-2'>
                <Checkbox className='fill-[#0053F3]' />
                <p className='text-[#4B4B4B] font-gilroyMedium text-sm pl-2'>
                  Analyze results with clarity, not guesswork
                </p>
              </div>
              <div className='flex items-center bg-white rounded-full px-3 py-2'>
                <Checkbox className='fill-[#0053F3]' />
                <p className='text-[#4B4B4B] font-gilroyMedium text-sm pl-2'>
                  Turn ideas into action with ease
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[40%] flex gap-10 flex-col items-center justify-center p-8 bg-white'>
        <Image
          src={logo}
          className='text-white block md:hidden'
          alt='logo'
          height={38}
        />

        <WaitlistForm />
      </div>
    </div>
  );
}

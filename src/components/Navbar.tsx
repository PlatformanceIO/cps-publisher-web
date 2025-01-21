'use client';
import { UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import logoDark from '@/public/logo-dark.svg';
import logo from '@/public/logo.svg';
import { dark } from '@clerk/themes';

const Navbar = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const { theme: selectedTheme, systemTheme } = useTheme();

  const theme = selectedTheme === 'system' ? systemTheme : selectedTheme;

  return (
    <div className='relative'>
      <div className='flex justify-between items-center border-b border-gray-200 dark:border-gray-600 px-5 py-2'>
        <Image
          src={theme === 'dark' ? logo : logoDark}
          alt='platformance-logo'
          height={32}
        />
        <div className='flex justify-between item-center flex-row-reverse '>
          <button onClick={() => setShowBackdrop(true)}>
            <UserButton
              signInUrl='/sign-in'
              showName
              appearance={{
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  userButtonPopoverCard: { pointerEvents: 'initial' },
                },
              }}
            />
          </button>
        </div>
        <div
          onClick={() => setShowBackdrop(false)}
          className={`absolute opacity-30 h-[calc(100vh)] w-full top-0 left-0 z-[1000] bg-gray-700 ${
            showBackdrop ? 'block' : 'hidden'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;

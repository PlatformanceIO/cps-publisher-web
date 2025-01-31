'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import Retool from 'react-retool';

interface RetoolProps {
  url: string;
  data: {
    accessToken: string;
  };
}

const RetoolIframe = ({ url, data }: RetoolProps) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (typeof event?.data === 'string' && event.data.includes('theme')) {
        const theme = event.data.split(':')[1];
        setTheme(theme);
      }
      if (event.data.url) {
        const newPath = event.data.url.href.replace(
          'https://portal.app.platformance.io/',
          ''
        );
        window.history.pushState({}, '', `/app/${newPath}`);
      }
    });
  }, []);

  return (
    <div className='h-[calc(100vh-50px)]'>
      <Retool url={url} data={{ accessToken: data.accessToken }} />
    </div>
  );
};

export default RetoolIframe;

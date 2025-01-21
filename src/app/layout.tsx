import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import Theme from '@/app/theme-toggle';

export const metadata: Metadata = {
  metadataBase: new URL('https://clerk-next-app.vercel.app/'),
  title: 'Platformance.io',
  description: 'Supercharge your business growth with Platformance.',
  openGraph: { images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider
        signInUrl='/waitlist'
        appearance={{
          elements: {},
          variables: {},
        }}
      >
        <body className={`min-h-screen flex flex-col antialiased`}>
          <Theme>{children}</Theme>
        </body>
      </ClerkProvider>

      <Script src='https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js' />
      <Script src='https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js' />
    </html>
  );
}

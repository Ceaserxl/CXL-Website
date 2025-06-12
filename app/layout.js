import './global.css';
import '../public/assets/bootstrap.min.css';
import Head from 'next/head';

export const metadata = {
  title: 'Jeremy Voegele Portfolio',
  description: 'IT Specialist | Developer | Veteran',
  icons: {
    icon: '/images/default_avatar.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

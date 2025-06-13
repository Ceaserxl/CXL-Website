import './global.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Jeremy Voegele Portfolio',
  description: 'IT Specialist | Developer | Veteran',
  icons: { icon: '/images/default_avatar.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

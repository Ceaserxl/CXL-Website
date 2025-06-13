import './global.css';
import NavBar from './components/NavBar';
import FadeWrapper from './components/FadeWrapper';

export const metadata = {
  title: 'Jeremy Voegele Portfolio',
  description: 'IT Specialist | Developer | Veteran',
  icons: { icon: '/images/default_avatar.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FadeWrapper>
          <NavBar />
          <div className="layout-container">
            {children}
          </div>
          <footer>
            © {new Date().getFullYear()} Jeremy Voegele
          </footer>
        </FadeWrapper>
      </body>
    </html>
  );
}

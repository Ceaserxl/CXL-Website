import './global.css';
import NavBar from './components/NavBar';
import FadeWrapper from './components/FadeWrapper';
import SocialsWidget from './components/widgets/SocialsWidget';


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
        <FadeWrapper>
          
          <div className="layout-container">
            {children}
          </div>
          
          <footer>
            © {new Date().getFullYear()} Jeremy Voegele
            <SocialsWidget />
          </footer>
        </FadeWrapper>
      </body>
    </html>
  );
}

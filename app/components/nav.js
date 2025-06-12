'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/', external: false },
    { label: 'Resume', path: '/resume', external: false },
    { label: 'GitHub', path: 'https://github.com/Ceaserxl', external: true },
    { label: 'Contact', path: '#', external: false, modal: true }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <Image src="/images/default_avatar.png" alt="Avatar" width={40} height={40} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
              {navItems.map((item, index) => {
                const isActive = (!item.external && pathname === item.path) ? 'active' : '';
                
                return (
                  <li className="nav-item" key={index}>
                    {item.external ? (
                      <a className={`nav-link ${isActive}`} href={item.path} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : item.modal ? (
                      <a className={`nav-link`} href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                        {item.label}
                      </a>
                    ) : (
                      <Link className={`nav-link ${isActive}`} href={item.path}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <div className="modal" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light" style={{ opacity: 1, pointerEvents: 'auto' }}>
            <div className="modal-header border-0">
              <h5 className="modal-title" id="contactModalLabel">📬 Contact</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p><strong>Email:</strong> <a href="mailto:jeremy.voegele@gmail.com" className="text-light">jeremy.voegele@gmail.com</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/Ceaserxl" target="_blank" rel="noopener noreferrer" className="text-light">github.com/Ceaserxl</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeremy-voegele-5062951b7/" target="_blank" rel="noopener noreferrer" className="text-light">linkedin.com/in/jeremy-voegele</a></p>
              <p><strong>Location:</strong> San Diego, CA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

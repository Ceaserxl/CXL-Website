// script.js
document.addEventListener('DOMContentLoaded', async () => {
  // Splash fade out
  const splash = document.getElementById('splash-screen');
  if (splash) {
    await new Promise(resolve => {
      setTimeout(() => {
        splash.classList.add('fade-out');  // add class to trigger CSS opacity transition
        setTimeout(() => {
          splash.style.display = 'none';
          // Restore scrolling after splash hidden
          document.documentElement.style.overflow = '';
          document.body.style.overflow = 'auto';
          resolve();
        }, 800);  // match CSS transition duration
      }, 1500);  // initial splash show duration
    });
  } else {
    // If no splash, immediately allow scrolling
    document.documentElement.style.overflow = '';
    document.body.style.overflow = 'auto';
  }

  const pageWrapper = document.getElementById('page-wrapper');
  const loadedStyles = new Set();

  // Load CSS helper: skips if already loaded, otherwise loads and waits
  function loadCSS(href) {
    return new Promise(resolve => {
      if (loadedStyles.has(href)) {
        resolve();
        return;
      }
      const existing = [...document.head.querySelectorAll('link[rel="stylesheet"]')]
        .find(link => link.href.includes(href));
      if (existing) {
        loadedStyles.add(href);
        resolve();
        return;
      }
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => {
        loadedStyles.add(href);
        resolve();
      };
      link.onerror = () => resolve(); // fail gracefully
      document.head.appendChild(link);
    });
  }

  // Extract 'page' param from URL safely
  function getPageFromHref(href) {
    try {
      const params = new URL(href, window.location.origin).searchParams;
      return params.get('page') || 'home';
    } catch {
      return 'home';
    }
  }

  // Initial page: load CSS first, then reveal content
  const initialPage = getPageFromHref(window.location.href);
  const initialCssPath = `/pages/${initialPage}/style.css`;

  await loadCSS(initialCssPath);
  pageWrapper.classList.add('visible'); // reveal content after CSS loads

  async function loadPage(href) {
    // Start fade out
    pageWrapper.classList.remove('visible');
    
    // Wait for the fade out transition to complete (match CSS duration)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Load CSS and fetch content
    const page = getPageFromHref(href);
    const cssPath = `/pages/${page}/style.css`;
    await loadCSS(cssPath);
    
    const res = await fetch(href, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
    const html = await res.text();
    
    pageWrapper.innerHTML = html;
    window.scrollTo(0, 0);
    history.pushState(null, '', href);
    
    // Update nav links, etc...
    document.querySelectorAll('a.nav-link').forEach(nav => {
      nav.classList.toggle('active', nav.getAttribute('href') === href);
    });

    if (typeof updateStatus === 'function' && document.getElementById('status-list')) {
      updateStatus();
    }

    // Fade in
    pageWrapper.classList.add('visible');
  }


  // Make updateStatus a global function
  window.updateStatus = function() {
    fetch('pages/home/sidebar/status/status-update.php')
      .then(res => res.json())
      .then(services => {
        const container = document.getElementById('status-list');
        if (!container) return;
        container.innerHTML = '';
        services.forEach(s => {
          const badgeClass = s.status === 'online' ? 'bg-success' : 'bg-danger';
          container.innerHTML += `
            <div class='d-flex align-items-center justify-content-between mb-2'>
              <div class='d-flex align-items-center'>
                <img src='images/${s.icon}' alt='${s.name}' width='28' height='28' class='me-2'>
                <strong>${s.name}</strong>
              </div>
              <span class='badge ${badgeClass}'>${s.status.charAt(0).toUpperCase() + s.status.slice(1)}</span>
            </div>
          `;
        });
      })
      .catch(err => {
        const container = document.getElementById('status-list');
        if (container) {
          container.innerHTML = '<p style="color: red;">Error: ' + err.message + '</p>';
        }
      });
  };

  // Bind click handlers for AJAX navigation
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/index.php?page=')) {
        e.preventDefault();
        loadPage(href).catch(err => console.error('Failed to load page:', err));
      }
    });
  });

  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        // Using Bootstrap's collapse method if Bootstrap JS is loaded
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          // fallback: remove the 'show' class manually
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const href = window.location.href;
    loadPage(href).catch(err => console.error('Failed to load page:', err));
  });

  // Call updateStatus once on initial load if the status container exists
  if (typeof updateStatus === 'function' && document.getElementById('status-list')) {
    updateStatus();
  }

  // Socials toggle button
  const toggleBtn = document.getElementById('socialToggle');
  const socialsBar = document.querySelector('.socials-bar');
  if (toggleBtn && socialsBar) {
    toggleBtn.addEventListener('click', () => {
      socialsBar.classList.toggle('active');
    });
  }
});

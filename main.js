/**
 * KIPENZI SUGAR COMPANY LIMITED - MASTER JAVASCRIPT (SUPER PREMIUM UPGRADE)
 * Features:
 * 1. Live Parallax Layered SVG Background (rAF loop, swaying cane, rising smoke, mood shift)
 * 2. Floating Glass Pill Navbar (shrink on scroll, scroll progress bar, gliding indicator, mega menu)
 * 3. 3D Tilt & Cursor Spotlight on Glass Cards
 * 4. Premium Forms (Floating labels, Kenyan phone mask, animated cane-field visualizer, confetti)
 * 5. Farmer Portal Skeleton Loaders & Micro-Interactions
 * Mur-Malanga, Alego Usonga, Siaya County, Kenya
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Parallax Background
  initLiveParallaxBackground();

  // 2. Render and Initialize Floating Glass Pill Navbar
  renderFloatingPillNavbar();
  renderSharedFooter();
  renderFloatingWhatsApp();
  renderSuccessModal();
  initPillNavbarInteractions();

  // 3. 3D Tilt and Spotlight for Cards
  initCard3DTilt();

  // 4. Forms: Floating Labels, Phone Masks, Cane Visualizer, Confetti
  initUpgradedForms();
  initCaneFieldVisualizer();
  initDropzoneMocks();

  // 5. Existing Core Features (Bilingual switcher, count-ups, accordions, wizards)
  initLanguageSwitcher();
  initCountUpAnimations();
  initAccordions();
  initOutgrowerWizard();
  initPaymentEstimator();
  initFarmerPortal();
  initFormInterceptors();
  initMagneticButtons();

  // 6. Mobile Layout & Navigation Helpers (Bottom Bar, Back to Top, Carousel Indicators)
  renderMobileNavigationHelpers();
  initCarouselIndicators();
});

/* ==========================================================================
   1. LIVE PARALLAX BACKGROUND (FULL-VIEWPORT LAYERED SVG)
   ========================================================================== */
function initLiveParallaxBackground() {
  if (document.getElementById('parallax-viewport')) return;

  const bgContainer = document.createElement('div');
  bgContainer.id = 'parallax-viewport';
  bgContainer.setAttribute('aria-hidden', 'true');

  bgContainer.innerHTML = `
    <!-- Sky Mood Shift Gradient -->
    <div class="parallax-sky" id="parallax-sky"></div>

    <!-- Radiant Glowing Sun -->
    <div class="parallax-sun" id="parallax-sun"></div>

    <!-- Drifting Ambient Clouds -->
    <svg class="parallax-cloud cloud-1" viewBox="0 0 240 80">
      <path d="M20 60 A20 20 0 0 1 40 30 A35 35 0 0 1 100 20 A40 40 0 0 1 170 30 A25 25 0 0 1 210 60 Z"/>
    </svg>
    <svg class="parallax-cloud cloud-2" viewBox="0 0 240 80">
      <path d="M15 55 A18 18 0 0 1 35 28 A32 32 0 0 1 95 18 A38 38 0 0 1 160 28 A22 22 0 0 1 200 55 Z"/>
    </svg>
    <svg class="parallax-cloud cloud-3" viewBox="0 0 240 80">
      <path d="M25 65 A22 22 0 0 1 48 32 A38 38 0 0 1 115 22 A45 45 0 0 1 190 32 A28 28 0 0 1 230 65 Z"/>
    </svg>

    <!-- Flying Birds -->
    <svg class="parallax-layer flying-bird" viewBox="0 0 60 30" style="width: 50px; height: 25px; top: 14%; left: 0;">
      <path d="M5 20 Q 15 5, 30 18 Q 45 5, 55 20" fill="none" stroke="#f5b82e" stroke-width="2.5" stroke-linecap="round"/>
    </svg>

    <!-- LAYER 1: Far Siaya Hills (Slowest: speed 0.08) -->
    <div class="parallax-layer" id="layer-far-hills" style="z-index: 1;">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#18130d" fill-opacity="0.6" d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,213.3C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"></path>
      </svg>
    </div>

    <!-- LAYER 2: Mid Hills & Acacia Silhouettes (Speed 0.16) -->
    <div class="parallax-layer" id="layer-mid-hills" style="z-index: 2;">
      <svg viewBox="0 0 1440 280" preserveAspectRatio="none">
        <path fill="#1e1811" fill-opacity="0.75" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L0,320Z"></path>
      </svg>
    </div>

    <!-- LAYER 3: Factory Skyline with Animated Chimney Smoke & Boilers (Speed 0.25) -->
    <div class="parallax-layer" id="layer-factory" style="z-index: 3;">
      <svg viewBox="0 0 1440 240" preserveAspectRatio="none">
        <!-- Factory Chimneys & 3 MW Cogeneration Tower -->
        <g fill="#14100b" opacity="0.9">
          <!-- Main Milling Complex -->
          <rect x="820" y="110" width="130" height="90" rx="4"/>
          <polygon points="810,110 885,75 960,110"/>
          
          <!-- Cogeneration Boiler Tower -->
          <rect x="970" y="70" width="55" height="130" rx="3"/>
          <line x1="970" y1="100" x2="1025" y2="100" stroke="#f5b82e" stroke-width="2"/>
          <line x1="970" y1="140" x2="1025" y2="140" stroke="#f5b82e" stroke-width="2"/>

          <!-- High-Pressure Chimneys -->
          <rect x="1035" y="45" width="14" height="155"/>
          <rect x="1060" y="35" width="16" height="165"/>
          
          <!-- Sugar Silo Domes -->
          <path d="M740,200 A40,40 0 0,1 810,200 Z"/>
          <path d="M680,200 A35,35 0 0,1 740,200 Z"/>
        </g>

        <!-- Animated Rising Boiler Smoke Particles -->
        <g class="factory-smoke" fill="#f5b82e" opacity="0.25">
          <circle cx="1042" cy="40" r="10"/>
          <circle cx="1068" cy="30" r="13"/>
          <circle cx="1050" cy="20" r="16"/>
        </g>

        <!-- Midground Sugarcane Crop Rows -->
        <path fill="#17120c" fill-opacity="0.9" d="M0,200 Q 360,170 720,205 T 1440,195 L 1440,320 L 0,320 Z"/>
      </svg>
    </div>

    <!-- LAYER 4: Foreground Swaying Sugarcane Stalks (Speed 0.45) -->
    <div class="parallax-layer" id="layer-foreground-cane" style="z-index: 4;">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        <g fill="#1b150e">
          <!-- Left Stalk Cluster -->
          <path class="swaying-cane" d="M20,180 Q 25,100 15,30 Q 35,60 22,180 Z"/>
          <path class="swaying-cane swaying-cane-delay" d="M45,180 Q 40,85 55,20 Q 55,75 48,180 Z"/>
          <path class="swaying-cane" d="M70,180 Q 80,95 72,40 Q 85,80 74,180 Z"/>

          <!-- Right Stalk Cluster -->
          <path class="swaying-cane swaying-cane-delay" d="M1360,180 Q 1350,90 1365,25 Q 1370,80 1362,180 Z"/>
          <path class="swaying-cane" d="M1390,180 Q 1400,95 1385,35 Q 1410,75 1395,180 Z"/>
          <path class="swaying-cane swaying-cane-delay" d="M1420,180 Q 1415,80 1430,15 Q 1435,70 1424,180 Z"/>
        </g>
      </svg>
    </div>
  `;

  document.body.prepend(bgContainer);

  // Parallax Scroll RequestAnimationFrame Engine
  let isTicking = false;
  let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const farHills = document.getElementById('layer-far-hills');
  const midHills = document.getElementById('layer-mid-hills');
  const factory = document.getElementById('layer-factory');
  const foreCane = document.getElementById('layer-foreground-cane');
  const sun = document.getElementById('parallax-sun');
  const sky = document.getElementById('parallax-sky');

  function onScrollParallax() {
    if (prefersReducedMotion || document.hidden) {
      isTicking = false;
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    // Apply 3D transforms at differing depth velocities
    if (farHills) farHills.style.transform = `translate3d(0, -${scrollY * 0.08}px, 0)`;
    if (midHills) midHills.style.transform = `translate3d(0, -${scrollY * 0.16}px, 0)`;
    if (factory) factory.style.transform = `translate3d(0, -${scrollY * 0.26}px, 0)`;
    if (foreCane) foreCane.style.transform = `translate3d(0, -${scrollY * 0.42}px, 0)`;

    // Sun gently descends and warms as user scrolls
    if (sun) {
      sun.style.transform = `translate3d(${scrollProgress * 60}px, ${scrollY * 0.18}px, 0) scale(${1 - scrollProgress * 0.15})`;
    }

    // Sky mood shift
    if (sky) {
      const topHue = 45 - scrollProgress * 25; // 45 (gold) -> 20 (sunset orange)
      const bottomHue = 150 - scrollProgress * 110; // 150 (mint) -> 40 (sunset gold)
      sky.style.background = `linear-gradient(180deg, hsl(${topHue}, 80%, 93%) 0%, hsl(160, 30%, 92%) 40%, hsl(${bottomHue}, 60%, 90%) 100%)`;
    }

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(onScrollParallax);
      isTicking = true;
    }
  }, { passive: true });

  // Pause animations when tab is hidden for performance
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !isTicking) {
      window.requestAnimationFrame(onScrollParallax);
    }
  });
}

/* ==========================================================================
   2. NAVBAR: FLOATING GLASS PILL
   ========================================================================== */
function renderFloatingPillNavbar() {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  const currentPath = window.location.pathname.toLowerCase();
  const getActiveClass = (pageName) => {
    if (pageName === 'index' && (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '')) {
      return 'active';
    }
    return currentPath.includes(pageName) ? 'active' : '';
  };

  mount.innerHTML = `
    <!-- Floating Glass Pill Container -->
    <div class="floating-navbar-container" id="nav-pill-wrapper">
      <nav class="nav-pill" id="nav-pill" aria-label="Main Navigation">
        
        <!-- Brand Logo -->
        <a href="index.html" class="pill-logo-link" aria-label="Kipenzi Sugar Company Limited">
          <div class="pill-logo-emblem">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 2 5 6 5 10c0 4.5 4 8.5 7 12 3-3.5 7-7.5 7-12 0-4-3-8-7-8zm0 17.5c-2.3-2.7-5-6-5-9.5 0-2.8 2.2-5.5 5-5.5s5 2.7 5 5.5c0 3.5-2.7 6.8-5 9.5z"/>
              <path d="M12 6c-1.5 0-2.5 1.2-2.5 2.5 0 2 2.5 4.5 2.5 4.5s2.5-2.5 2.5-4.5C14.5 7.2 13.5 6 12 6z"/>
            </svg>
          </div>
          <div class="pill-logo-text">
            <span class="pill-logo-title">KIPENZI</span>
            <span class="pill-logo-sub">SUGAR CO. LTD</span>
          </div>
        </a>

        <!-- Desktop Navigation Links with Gliding Indicator -->
        <div class="pill-nav-links" id="pill-nav-links">
          <div class="nav-glider" id="nav-glider"></div>

          <!-- Home -->
          <div class="nav-link-item ${getActiveClass('index')}">
            <a href="index.html" class="pill-link" data-i18n="nav_home">Home</a>
          </div>

          <!-- About & Project Mega Menu -->
          <div class="nav-link-item ${getActiveClass('about')} ${getActiveClass('project')}">
            <a href="about.html" class="pill-link">
              <span data-i18n="nav_about_project">About &amp; Mill</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <!-- Mega Menu Glass Card -->
            <div class="nav-mega-card">
              <div class="mega-grid">
                <div>
                  <div class="mega-col-title" data-i18n="mega_corp">Corporate Profile</div>
                  <a href="about.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_about">About Kipenzi</span>
                      <span class="mega-desc">Vision, values &amp; leadership</span>
                    </div>
                  </a>
                  <a href="community.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_community">Community &amp; EIA</span>
                      <span class="mega-desc">Jobs, environment &amp; grievance desk</span>
                    </div>
                  </a>
                </div>

                <div>
                  <div class="mega-col-title" data-i18n="mega_plant">The Sugar Mill</div>
                  <a href="project.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 7l6-4 6 4M10 11h4M10 15h4"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_project">Factory Specifications</span>
                      <span class="mega-desc">1,250 TCD, KES 1.45B, 3 MW cogen</span>
                    </div>
                  </a>
                  <a href="byproducts.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8M12 8v8"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_byproducts">By-Products &amp; Power</span>
                      <span class="mega-desc">Molasses, bagasse &amp; bio-fertiliser</span>
                    </div>
                  </a>
                </div>

                <div class="mega-card-highlight">
                  <div>
                    <span class="badge badge-orange" style="margin-bottom: 0.5rem;" data-i18n="badge_siaya">Siaya Agribusiness</span>
                    <h5 data-i18n="mega_hub_title">Transforming Alego Usonga</h5>
                    <p data-i18n="mega_hub_desc">Building industrial capacity, local wealth, and reliable farmer payouts in Mur-Malanga.</p>
                  </div>
                  <a href="project.html" class="btn btn-outline-white btn-sm" data-i18n="mega_explore_factory">Explore Factory Facts &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Outgrowers Mega Menu -->
          <div class="nav-link-item ${getActiveClass('outgrowers')} ${getActiveClass('tracker')} ${getActiveClass('transparency')} ${getActiveClass('harvest')} ${getActiveClass('support')}">
            <a href="outgrowers.html" class="pill-link">
              <span data-i18n="nav_outgrowers">Farmers &amp; Outgrowers</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <!-- Mega Menu Glass Card -->
            <div class="nav-mega-card" style="width: 840px;">
              <div class="mega-grid" style="grid-template-columns: 1fr 1fr 1fr;">
                <div>
                  <div class="mega-col-title" data-i18n="mega_programs">Farmer Programs</div>
                  <a href="outgrowers.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_outgrower_scheme">Outgrower Scheme</span>
                      <span class="mega-desc">Contract farming, seeds &amp; tractor prep</span>
                    </div>
                  </a>
                  <a href="tracker.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_tracker">10,000 Ha Tracker</span>
                      <span class="mega-desc">Progress across Alego Usonga wards</span>
                    </div>
                  </a>
                </div>

                <div>
                  <div class="mega-col-title" data-i18n="mega_trust">Trust &amp; Payments</div>
                  <a href="transparency.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_transparency">7-Day Payment Promise</span>
                      <span class="mega-desc">Sugar Board statutory guarantee &amp; estimator</span>
                    </div>
                  </a>
                  <a href="harvest-transport.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_harvest">Harvest &amp; Logistics</span>
                      <span class="mega-desc">18-22mo maturity &amp; booking</span>
                    </div>
                  </a>
                </div>

                <div>
                  <div class="mega-col-title" data-i18n="mega_field_support">Services &amp; Portal</div>
                  <a href="support.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_extension">Extension &amp; Agronomy</span>
                      <span class="mega-desc">Soil care, barazas &amp; inputs</span>
                    </div>
                  </a>
                  <a href="portal.html" class="mega-link-card" style="background-color: var(--gold-tint); border: 1px solid var(--gold-border);">
                    <div class="mega-icon" style="background: var(--gold-gradient); color: #0b0b0d;">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" style="color: var(--color-primary-dark);" data-i18n="mega_portal_demo">Farmer Portal [Demo]</span>
                      <span class="mega-desc">Weighbridge tickets &amp; M-Pesa</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Investors & Regulators -->
          <div class="nav-link-item ${getActiveClass('investors')} ${getActiveClass('careers')}">
            <a href="investors.html" class="pill-link">
              <span data-i18n="nav_investors">Investors &amp; Regulators</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <!-- Mega Menu Glass Card -->
            <div class="nav-mega-card" style="width: 520px;">
              <div class="mega-grid" style="grid-template-columns: 1fr 1fr;">
                <div>
                  <div class="mega-col-title" data-i18n="mega_compliance">Market &amp; Licensing</div>
                  <a href="investors.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_investor_center">Investor Brief</span>
                      <span class="mega-desc">477,551T import deficit fact sheet</span>
                    </div>
                  </a>
                  <a href="byproducts.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9M14 17H5M17 12H3"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_distributors">Industrial Buyers</span>
                      <span class="mega-desc">Molasses, energy &amp; sugar</span>
                    </div>
                  </a>
                </div>
                <div>
                  <div class="mega-col-title" data-i18n="mega_opportunities">Opportunities</div>
                  <a href="careers-tenders.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_careers_tenders">Careers &amp; Tenders</span>
                      <span class="mega-desc">Local jobs &amp; haulage tenders</span>
                    </div>
                  </a>
                  <a href="news.html" class="mega-link-card">
                    <div class="mega-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div class="mega-content">
                      <span class="mega-title" data-i18n="mega_news">Project News</span>
                      <span class="mega-desc">Barazas &amp; milestones</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="nav-link-item ${getActiveClass('contact')}">
            <a href="contact.html" class="pill-link" data-i18n="nav_contact">Contact</a>
          </div>
        </div>

        <!-- Right Side Action Group -->
        <div class="pill-actions">
          <!-- Language Toggle Pill -->
          <button id="lang-toggle" class="pill-lang-btn" aria-label="Toggle Language English / Kiswahili">
            <span id="current-lang-text">EN</span> | <span>SW</span>
          </button>

          <!-- Farmer Portal Link -->
          <a href="portal.html" class="pill-portal-link" title="Farmer Portal Demo">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span data-i18n="btn_portal">Portal</span>
          </a>

          <!-- Orange Shimmer Farmer Registration Button -->
          <a href="outgrowers.html#register" class="btn-shimmer-orange" id="pill-farmer-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            <span data-i18n="btn_register_farmer">Register as Farmer</span>
          </a>

          <!-- Mobile Hamburger Trigger -->
          <button class="pill-hamburger-btn" id="mobile-menu-toggle" aria-label="Open Mobile Menu">
            <span class="pill-hamburger-line"></span>
            <span class="pill-hamburger-line"></span>
            <span class="pill-hamburger-line"></span>
          </button>
        </div>

        <!-- Thin Orange Scroll Progress Line along bottom -->
        <div class="nav-scroll-progress">
          <div class="nav-scroll-progress-bar" id="nav-progress-bar"></div>
        </div>
      </nav>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-backdrop" id="mobile-nav-backdrop">
      <div class="mobile-nav-drawer">
        <div class="mobile-nav-header">
          <div class="brand-text">
            <span class="brand-title" style="font-size: 1.25rem; color: var(--text);">KIPENZI SUGAR</span>
            <span class="brand-subtitle" style="color: var(--gold);">Siaya County, Kenya</span>
          </div>
          <button class="mobile-close-btn" id="mobile-menu-close" aria-label="Close Mobile Menu">&times;</button>
        </div>
        <div class="mobile-nav-body">
          <div class="mobile-nav-accordion-item">
            <a href="index.html" class="mobile-accordion-trigger" style="text-decoration:none;" data-i18n="nav_home">Home</a>
          </div>

          <div class="mobile-nav-accordion-item">
            <button class="mobile-accordion-trigger" data-mobile-toggle="acc-farmers">
              <span data-i18n="nav_outgrowers">Farmers &amp; Outgrowers</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="mobile-accordion-content" id="acc-farmers">
              <a href="outgrowers.html" class="mobile-sublink" data-i18n="mega_outgrower_scheme">Why Grow Cane for Kipenzi</a>
              <a href="outgrowers.html#register" class="mobile-sublink" style="color: var(--color-accent); font-weight: 700;" data-i18n="btn_register_farmer">Register as Outgrower</a>
              <a href="tracker.html" class="mobile-sublink" data-i18n="mega_tracker">10,000 Ha Progress Tracker</a>
              <a href="transparency.html" class="mobile-sublink" data-i18n="mega_transparency">7-Day Payment Promise &amp; Estimator</a>
              <a href="harvest-transport.html" class="mobile-sublink" data-i18n="mega_harvest">Harvest &amp; Transport Booking</a>
              <a href="support.html" class="mobile-sublink" data-i18n="mega_extension">Extension Support &amp; Agronomy</a>
              <a href="portal.html" class="mobile-sublink" data-i18n="mega_portal_demo">Farmer Portal Demo</a>
            </div>
          </div>

          <div class="mobile-nav-accordion-item">
            <button class="mobile-accordion-trigger" data-mobile-toggle="acc-about">
              <span data-i18n="nav_about_project">About &amp; Factory</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="mobile-accordion-content" id="acc-about">
              <a href="about.html" class="mobile-sublink" data-i18n="mega_about">About Kipenzi</a>
              <a href="project.html" class="mobile-sublink" data-i18n="mega_project">The Factory (1,250 TCD, KES 1.45B)</a>
              <a href="byproducts.html" class="mobile-sublink" data-i18n="mega_byproducts">By-Products &amp; Cogeneration</a>
              <a href="community.html" class="mobile-sublink" data-i18n="mega_community">Community &amp; EIA Public Comments</a>
            </div>
          </div>

          <div class="mobile-nav-accordion-item">
            <button class="mobile-accordion-trigger" data-mobile-toggle="acc-biz">
              <span data-i18n="nav_investors">Investors &amp; Careers</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="mobile-accordion-content" id="acc-biz">
              <a href="investors.html" class="mobile-sublink" data-i18n="mega_investor_center">Investor Fact Sheet &amp; Licensing</a>
              <a href="careers-tenders.html" class="mobile-sublink" data-i18n="mega_careers_tenders">Careers &amp; Supplier Tenders</a>
              <a href="news.html" class="mobile-sublink" data-i18n="mega_news">Project News</a>
              <a href="contact.html" class="mobile-sublink" data-i18n="nav_contact">Contact Us</a>
            </div>
          </div>
        </div>
        <div class="mobile-nav-footer">
          <a href="outgrowers.html#register" class="btn btn-primary btn-sm" style="width: 100%;" data-i18n="btn_register_farmer">Register as Farmer</a>
          <a href="portal.html" class="btn btn-outline-green btn-sm" style="width: 100%;" data-i18n="mega_portal_demo">Open Farmer Portal Demo</a>
        </div>
      </div>
    </div>
  `;
}

function initPillNavbarInteractions() {
  const pillWrapper = document.getElementById('nav-pill-wrapper');
  const progressBar = document.getElementById('nav-progress-bar');
  const glider = document.getElementById('nav-glider');
  const linksContainer = document.getElementById('pill-nav-links');

  // Shrink on scroll & update thin orange progress line
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 30) {
      pillWrapper?.classList.add('scrolled');
    } else {
      pillWrapper?.classList.remove('scrolled');
    }

    if (progressBar) {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pct = Math.min(Math.max((scrollY / maxScroll) * 100, 0), 100);
      progressBar.style.width = `${pct}%`;
    }
  }, { passive: true });

  // Sliding active link indicator (Glider)
  if (linksContainer && glider) {
    const activeItem = linksContainer.querySelector('.nav-link-item.active');
    const updateGlider = (target) => {
      if (!target) {
        glider.style.opacity = '0';
        return;
      }
      const rect = target.getBoundingClientRect();
      const parentRect = linksContainer.getBoundingClientRect();
      glider.style.left = `${rect.left - parentRect.left}px`;
      glider.style.width = `${rect.width}px`;
      glider.style.opacity = '1';
    };

    if (activeItem) {
      updateGlider(activeItem);
    }

    linksContainer.querySelectorAll('.nav-link-item').forEach(item => {
      item.addEventListener('mouseenter', () => updateGlider(item));
    });

    linksContainer.addEventListener('mouseleave', () => {
      if (activeItem) {
        updateGlider(activeItem);
      } else {
        glider.style.opacity = '0';
      }
    });
  }

  // Mobile drawer controls
  initMobileNav();
}

/* ==========================================================================
   3. 3D TILT & CURSOR SPOTLIGHT ON GLASS CARDS
   ========================================================================== */
function initCard3DTilt() {
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchDevice) return; // Disable 3D tilt on touch screens

  const cards = document.querySelectorAll('.card-glass, .card-white');

  cards.forEach(card => {
    // Add glass card class if not present
    card.classList.add('card-glass');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Spotlight glow coordinates
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D tilt angles (max +/- 8 degrees)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   4. FORMS: FLOATING LABELS, KENYAN PHONE MASKS & CONFETTI
   ========================================================================== */
function initUpgradedForms() {
  // Kenyan phone input auto-masking (07XX XXX XXX / +254 7XX XXX XXX)
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let val = input.value.replace(/\D/g, ''); // Digits only

      if (val.startsWith('254')) {
        // e.g. +254 712 345 678
        val = val.substring(0, 12);
        let formatted = '+254 ';
        if (val.length > 3) formatted += val.substring(3, 6);
        if (val.length > 6) formatted += ' ' + val.substring(6, 9);
        if (val.length > 9) formatted += ' ' + val.substring(9, 12);
        input.value = formatted.trim();
      } else {
        // e.g. 0712 345 678
        if (val.startsWith('0')) val = val.substring(0, 10);
        let formatted = '';
        if (val.length > 0) formatted += val.substring(0, 4);
        if (val.length > 4) formatted += ' ' + val.substring(4, 7);
        if (val.length > 7) formatted += ' ' + val.substring(7, 10);
        input.value = formatted.trim();
      }
    });

    // Inline validation visual feedback
    input.addEventListener('blur', () => {
      const clean = input.value.replace(/\D/g, '');
      if (clean.length === 10 || clean.length === 12) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      } else if (clean.length > 0) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      }
    });
  });
}

/* Live Cane Field Visualizer Component */
function initCaneFieldVisualizer() {
  const haSlider = document.getElementById('wiz-hectares-slider') || document.getElementById('wiz-hectares');
  const container = document.getElementById('cane-stalks-container');
  const haLabel = document.getElementById('cane-visualizer-count');

  if (!haSlider || !container) return;

  const updateStalks = (haValue) => {
    const ha = parseFloat(haValue) || 1;
    if (haLabel) haLabel.textContent = `${ha} Hectares (~${(ha * 2.47).toFixed(1)} Acres)`;

    // Scale number of stalks between 5 and 28
    const stalkCount = Math.min(Math.max(Math.round(ha * 4), 5), 28);
    let stalksHtml = '';

    for (let i = 0; i < stalkCount; i++) {
      const height = 35 + ((i * 7) % 25);
      stalksHtml += `
        <svg class="cane-stalk-icon" viewBox="0 0 16 60" style="height: ${height}px;">
          <path d="M8,60 L8,10 Q12,6 8,0 Q4,6 8,10" fill="none" stroke="currentColor" stroke-width="3"/>
          <line x1="4" y1="20" x2="12" y2="20" stroke="currentColor" stroke-width="2"/>
          <line x1="4" y1="36" x2="12" y2="36" stroke="currentColor" stroke-width="2"/>
          <line x1="4" y1="48" x2="12" y2="48" stroke="currentColor" stroke-width="2"/>
        </svg>
      `;
    }
    container.innerHTML = stalksHtml;
  };

  haSlider.addEventListener('input', (e) => updateStalks(e.target.value));
  updateStalks(haSlider.value || 2.5);
}

/* Drag-and-Drop Mock File Upload */
function initDropzoneMocks() {
  const dropzones = document.querySelectorAll('.dropzone-mock');
  dropzones.forEach(zone => {
    ['dragenter', 'dragover'].forEach(name => {
      zone.addEventListener(name, (e) => {
        e.preventDefault();
        zone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      zone.addEventListener(name, (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
      });
    });

    zone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const fileNameDisplay = zone.querySelector('.dropzone-filename') || document.createElement('div');
        fileNameDisplay.className = 'dropzone-filename';
        fileNameDisplay.style.cssText = 'color: var(--color-primary); font-weight: 700; margin-top: 0.5rem;';
        fileNameDisplay.textContent = `Attached: ${files[0].name} (${(files[0].size / 1024).toFixed(1)} KB) [Ready]`;
        zone.appendChild(fileNameDisplay);
        showToast(`Document "${files[0].name}" attached successfully!`, 'success');
      }
    });

    zone.addEventListener('click', () => {
      showToast('Document attach simulator: Mock file attached.', 'info');
    });
  });
}

/* Falling Cane-Leaf Confetti Generator */
function triggerCaneLeafConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#0B6E4F', '#F28C28', '#FFD27D', '#168E68', '#E6F5EE'];
  const pieceCount = 45;

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 1.5}s`;
    piece.style.animationDuration = `${2.5 + Math.random() * 1.5}s`;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4500);
}

/* Toast Notification System */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

/* ==========================================================================
   5. POLISH: MAGNETIC BUTTON PHYSICS & SKELETON LOADERS
   ========================================================================== */
function initMagneticButtons() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) return;

  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-shimmer-orange, .whatsapp-btn-float');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });

    // Ripple effect on click
    btn.classList.add('btn-ripple');
    btn.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-circle';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ==========================================================================
   6. SHARED FOOTER & MODAL INJECTION
   ========================================================================== */
function renderSharedFooter() {
  const footerMount = document.getElementById('site-footer');
  if (!footerMount) return;

  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col-brand">
            <div class="brand-logo-link">
              <div class="brand-emblem" style="width: 38px; height: 38px;">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 6 5 10c0 4.5 4 8.5 7 12 3-3.5 7-7.5 7-12 0-4-3-8-7-8zm0 17.5c-2.3-2.7-5-6-5-9.5 0-2.8 2.2-5.5 5-5.5s5 2.7 5 5.5c0 3.5-2.7 6.8-5 9.5z"/></svg>
              </div>
              <div class="brand-text">
                <span class="brand-title" style="font-size: 1.25rem; color: var(--text);">KIPENZI</span>
                <span class="brand-subtitle" style="color: var(--gold);">SUGAR COMPANY LTD</span>
              </div>
            </div>
            <p data-i18n="footer_summary">
              Kipenzi Sugar Company Limited is establishing a modern 1,250 TCD sugar milling facility in Mur-Malanga, Alego Usonga, Siaya County. We are built on farmer trust, 7-day payment transparency, and sustainable local growth.
            </p>
            <div style="margin-top: 1.25rem;">
              <span class="badge badge-sample" data-i18n="badge_statutory">Kenya Sugar Board Registered Framework [Sample]</span>
            </div>
          </div>

          <div>
            <h4 class="footer-col-title" data-i18n="footer_outgrower_col">Outgrowers &amp; Trust</h4>
            <ul class="footer-links-list">
              <li><a href="outgrowers.html#register" data-i18n="btn_register_farmer">Register as Outgrower</a></li>
              <li><a href="transparency.html" data-i18n="mega_transparency">7-Day Payment Promise</a></li>
              <li><a href="transparency.html#estimator" data-i18n="calc_nav">Cane Payment Estimator</a></li>
              <li><a href="tracker.html" data-i18n="mega_tracker">10,000 Ha Progress Tracker</a></li>
              <li><a href="harvest-transport.html" data-i18n="mega_harvest">Harvest Booking &amp; Calendar</a></li>
              <li><a href="support.html" data-i18n="mega_extension">Extension Support &amp; Inputs</a></li>
              <li><a href="portal.html" data-i18n="mega_portal_demo">Farmer Portal Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title" data-i18n="footer_project_col">The Project</h4>
            <ul class="footer-links-list">
              <li><a href="project.html" data-i18n="mega_project">Factory Specifications</a></li>
              <li><a href="about.html" data-i18n="mega_about">About &amp; Leadership</a></li>
              <li><a href="community.html" data-i18n="mega_community">Community &amp; EIA Public Comments</a></li>
              <li><a href="byproducts.html" data-i18n="mega_byproducts">Cogeneration &amp; By-Products</a></li>
              <li><a href="investors.html" data-i18n="mega_investor_center">Investor Pack &amp; Licensing</a></li>
              <li><a href="careers-tenders.html" data-i18n="mega_careers_tenders">Careers &amp; Supplier Tenders</a></li>
              <li><a href="news.html" data-i18n="mega_news">News &amp; Milestones</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title" data-i18n="footer_location_col">Factory &amp; Office</h4>
            <ul class="footer-links-list" style="font-size: 0.88rem; color: var(--text-muted);">
              <li style="margin-bottom: 0.85rem;">
                <strong style="color: var(--gold); display: block;">Factory Site:</strong>
                Mur-Malanga Sub-Location, Bar Olengo, South East Alego, Alego Usonga, Siaya County, Kenya
              </li>
              <li style="margin-bottom: 0.85rem;">
                <strong style="color: var(--gold); display: block;">Liaison Office:</strong>
                Siaya Township Liaison Desk [Placeholder]
              </li>
              <li style="margin-bottom: 0.85rem;">
                <strong style="color: var(--gold); display: block;">Farmer Helpline:</strong>
                +254 (0) 700 000 000 [Sample]
              </li>
              <li>
                <strong style="color: var(--gold); display: block;">Email Inquiries:</strong>
                info@kipenzisugar.co.ke [Placeholder]
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom-strip">
          <div>
            &copy; 2026 Kipenzi Sugar Company Limited. All rights reserved. | Alego Usonga, Siaya County.
          </div>
          <div>
            <span class="badge badge-sample">DEMO MOCK-UP &mdash; INVESTOR &amp; FARMER PREVIEW</span>
          </div>
          <div>
            <a href="transparency.html#dispute" style="color: rgba(255,255,255,0.6); text-decoration: underline;">Farmer Dispute Protocol</a> &bull; 
            <a href="community.html#grievance" style="color: rgba(255,255,255,0.6); text-decoration: underline;">Community Grievance Desk</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingWhatsApp() {
  const mount = document.getElementById('floating-whatsapp');
  if (!mount) return;

  mount.innerHTML = `
    <div class="floating-whatsapp-container">
      <div class="whatsapp-popup-teaser" id="wa-teaser">
        <button class="wa-teaser-close" id="wa-teaser-close-btn" aria-label="Close notification" title="Dismiss prompt">&times;</button>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
        <div class="whatsapp-teaser-text">
          <span data-i18n="wa_prompt">Have questions about cane planting?</span>
          <br><strong style="color: var(--color-primary);" data-i18n="wa_chat">Chat with Kipenzi Agro Desk</strong>
        </div>
      </div>
      <a href="https://wa.me/254700000000?text=Hello%20Kipenzi%20Sugar%20Team,%20I%20would%20like%20to%20inquire%20about%20outgrower%20registration%20in%20Alego%20Usonga" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="whatsapp-btn-float" 
         aria-label="Chat with Kipenzi Sugar on WhatsApp">
        <span class="whatsapp-ping"></span>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </div>
  `;

  const closeBtn = document.getElementById('wa-teaser-close-btn');
  const teaser = document.getElementById('wa-teaser');

  // Dismiss handling via localStorage
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (teaser) teaser.style.display = 'none';
      localStorage.setItem('wa_dismissed', '1');
    });
  }

  // Check persistent dismissal
  if (localStorage.getItem('wa_dismissed') === '1') {
    if (teaser) teaser.style.display = 'none';
  } else if (teaser) {
    // Show once and auto-collapse after 5 seconds
    setTimeout(() => {
      if (teaser && teaser.style.display !== 'none') {
        teaser.style.opacity = '0';
        teaser.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
          teaser.style.display = 'none';
        }, 400);
      }
    }, 5000);
  }
}

function renderSuccessModal() {
  const modalDiv = document.createElement('div');
  modalDiv.id = 'feedback-modal';
  modalDiv.className = 'modal-overlay';
  modalDiv.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" onclick="closeFeedbackModal()">&times;</button>
      <div style="text-align: center;">
        <div style="width: 68px; height: 68px; border-radius: 50%; background: var(--color-mint); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span class="badge badge-sample" style="margin-bottom: 0.75rem;">MOCKUP SUBMISSION DEMO</span>
        <h3 id="modal-title" style="margin-bottom: 0.5rem; color: var(--color-primary-dark);">Request Received!</h3>
        <p id="modal-message" style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          Thank you for reaching out to Kipenzi Sugar Company Limited.
        </p>
        <div id="modal-details" style="background: var(--color-mint-light); border-radius: var(--radius-md); padding: 1rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.85rem; border: 1px solid var(--color-border);">
        </div>
        <button class="btn btn-green btn-sm" onclick="closeFeedbackModal()" style="width: 100%;">
          Close Window
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);
}

function openFeedbackModal(title, message, detailsHtml) {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;
  document.getElementById('modal-details').innerHTML = detailsHtml;
  modal.classList.add('open');
  triggerCaneLeafConfetti();
}

window.closeFeedbackModal = function() {
  const modal = document.getElementById('feedback-modal');
  if (modal) modal.classList.remove('open');
};

/* ==========================================================================
   7. BILINGUAL TRANSLATION (EN / SW)
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    top_status: "Project Under Implementation",
    farmer_hotline: "Farmer Helpline:",
    nav_home: "Home",
    nav_about_project: "About & Mill",
    nav_outgrowers: "Farmers & Outgrowers",
    nav_investors: "Investors & Regulators",
    nav_contact: "Contact",
    btn_portal: "Portal",
    btn_register_farmer: "Register as Farmer",
    badge_siaya: "Siaya Agribusiness Hub",
    badge_statutory: "Kenya Sugar Board Registered Framework [Sample]",
    mega_corp: "Corporate Profile",
    mega_about: "About Kipenzi",
    mega_community: "Community & EIA",
    mega_plant: "The Sugar Mill",
    mega_project: "Factory Specifications",
    mega_byproducts: "By-Products & Power",
    mega_hub_title: "Transforming Alego Usonga",
    mega_hub_desc: "Building industrial capacity, local wealth and reliable farmer payouts in Mur-Malanga.",
    mega_explore_factory: "Explore Factory Facts &rarr;",
    mega_programs: "Farmer Programs",
    mega_outgrower_scheme: "Outgrower Scheme",
    mega_tracker: "10,000 Ha Tracker",
    mega_trust: "Trust & Payments",
    mega_transparency: "7-Day Payment Promise",
    mega_harvest: "Harvest & Logistics",
    mega_field_support: "Services & Portal",
    mega_extension: "Extension & Agronomy",
    mega_portal_demo: "Farmer Portal [Demo]",
    mega_compliance: "Market & Licensing",
    mega_investor_center: "Investor Brief",
    mega_distributors: "Industrial Buyers",
    mega_opportunities: "Opportunities",
    mega_careers_tenders: "Careers & Tenders",
    mega_news: "Project News",
    footer_summary: "Kipenzi Sugar Company Limited is establishing a modern 1,250 TCD sugar milling facility in Mur-Malanga, Alego Usonga, Siaya County. We are built on farmer trust, 7-day payment transparency, and sustainable local growth.",
    footer_outgrower_col: "Outgrowers & Trust",
    footer_project_col: "The Project",
    footer_location_col: "Factory & Office",
    calc_nav: "Cane Payment Estimator",
    wa_prompt: "Have questions about cane contracts or planting?",
    wa_chat: "Chat with Kipenzi Agro Desk"
  },
  sw: {
    top_status: "Mradi Unatekelezwa",
    farmer_hotline: "Msaada kwa Wakulima:",
    nav_home: "Mwanzo",
    nav_about_project: "Kuhusu & Kiwanda",
    nav_outgrowers: "Wakulima & Ubia",
    nav_investors: "Wawekezaji & Sheria",
    nav_contact: "Mawasiliano",
    btn_portal: "Tovuti ya Mkulima",
    btn_register_farmer: "Jiandikishe Kama Mkulima",
    badge_siaya: "Kituo cha Kilimo-Biashara Siaya",
    badge_statutory: "Mfumo Uliosajiliwa na Bodi ya Sukari Kenya [Sampuli]",
    mega_corp: "Wasifu wa Kampuni",
    mega_about: "Kuhusu Kipenzi",
    mega_community: "Jamii & Mazingira",
    mega_plant: "Kiwanda cha Sukari",
    mega_project: "Taarifa za Kiwanda",
    mega_byproducts: "Mimea-Zao & Nishati",
    mega_hub_title: "Kubadilisha Alego Usonga",
    mega_hub_desc: "Kujenga uwezo wa viwanda, uchumi wa wenyeji na malipo ya kuaminika Mur-Malanga.",
    mega_explore_factory: "Tazama Ukweli wa Kiwanda &rarr;",
    mega_programs: "Mipango ya Wakulima",
    mega_outgrower_scheme: "Mpango wa Wakulima wa Nje",
    mega_tracker: "Kifuatiliaji cha Ekari 10,000",
    mega_trust: "Uaminifu & Malipo",
    mega_transparency: "Ahadi ya Malipo ya Siku 7",
    mega_harvest: "Uvunaji & Usafirishaji",
    mega_field_support: "Huduma za Kilimo",
    mega_extension: "Maafisa wa Nyanjani & Ushauri",
    mega_portal_demo: "Tovuti ya Mkulima [Sampuli]",
    mega_compliance: "Sheria & Soko",
    mega_investor_center: "Kituo cha Wawekezaji",
    mega_distributors: "Wanunuzi wa Viwandani",
    mega_opportunities: "Nafasi za Kazi & Zabuni",
    mega_careers_tenders: "Kazi & Zabuni",
    mega_news: "Habari za Mradi",
    footer_summary: "Kipenzi Sugar Company Limited inajenga kiwanda cha kisasa cha kusaga miwa tani 1,250 kwa siku huko Mur-Malanga, Alego Usonga, Kaunti ya Siaya. Tumejengwa kwa uaminifu wa mkulima na malipo ya siku 7.",
    footer_outgrower_col: "Wakulima & Uaminifu",
    footer_project_col: "Kuhusu Mradi",
    footer_location_col: "Kiwanda & Ofisi",
    calc_nav: "Kikokotoo cha Malipo ya Miwa",
    wa_prompt: "Una maswali kuhusu mikataba ya miwa au upanzi?",
    wa_chat: "Zungumza na Dawati la Kilimo la Kipenzi"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const toggleBtn = document.getElementById('lang-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    applyTranslations(currentLang);
    const langDisplay = document.getElementById('current-lang-text');
    if (langDisplay) {
      langDisplay.textContent = currentLang.toUpperCase();
    }
    showToast(currentLang === 'en' ? 'Switched to English' : 'Lugha imebadilishwa kuwa Kiswahili', 'info');
  });
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

/* ==========================================================================
   8. MOBILE DRAWER ACCORDION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  if (toggleBtn && backdrop) {
    toggleBtn.addEventListener('click', () => backdrop.classList.add('open'));
  }
  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
  }
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  }

  document.querySelectorAll('[data-mobile-toggle]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-mobile-toggle');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.toggle('open');
      }
    });
  });
}

/* ==========================================================================
   9. COUNT-UP ANIMATIONS WITH CUBIC EASING
   ========================================================================== */
function initCountUpAnimations() {
  const statElements = document.querySelectorAll('[data-count-target]');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const duration = 1800;
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeProgress;

          el.textContent = `${prefix}${currentVal.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          })}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${target.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            })}${suffix}`;
          }
        }

        requestAnimationFrame(updateCount);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statElements.forEach(el => observer.observe(el));
}

function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

/* ==========================================================================
   10. MULTI-STEP OUTGROWER REGISTRATION WIZARD
   ========================================================================== */
function initOutgrowerWizard() {
  const wizardForm = document.getElementById('outgrower-wizard-form');
  if (!wizardForm) return;

  let currentStep = 1;
  const totalSteps = 4;

  const updateWizardUI = () => {
    for (let i = 1; i <= totalSteps; i++) {
      const stepIndicator = document.getElementById(`step-indicator-${i}`);
      const panel = document.getElementById(`wizard-step-${i}`);

      if (stepIndicator) {
        stepIndicator.classList.remove('active', 'completed');
        if (i === currentStep) {
          stepIndicator.classList.add('active');
        } else if (i < currentStep) {
          stepIndicator.classList.add('completed');
        }
      }

      if (panel) {
        panel.classList.toggle('active', i === currentStep);
      }
    }
  };

  document.querySelectorAll('[data-wizard-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentPanel = document.getElementById(`wizard-step-${currentStep}`);
      if (currentPanel) {
        const requiredInputs = currentPanel.querySelectorAll('[required]');
        let valid = true;
        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.focus();
            input.classList.add('is-invalid');
            setTimeout(() => input.classList.remove('is-invalid'), 2000);
          }
        });
        if (!valid) return;
      }

      if (currentStep < totalSteps) {
        currentStep++;
        updateWizardUI();
        if (currentStep === 4) {
          populateWizardSummary();
        }
      }
    });
  });

  document.querySelectorAll('[data-wizard-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  });

  wizardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('wiz-farmer-name')?.value || 'Valued Farmer';
    const ward = document.getElementById('wiz-ward')?.value || 'Alego Usonga';
    const ha = document.getElementById('wiz-hectares')?.value || '2.5';
    const phone = document.getElementById('wiz-phone')?.value || '+254 7XX XXX XXX';
    const sampleRef = `KPZ-FMR-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    triggerCaneLeafConfetti();
    showToast('Karibu! Farmer Registration Successfully Submitted!', 'success');
    openFeedbackModal(
      "Karibu Kipenzi! Farmer Registration Received",
      `Your preliminary outgrower registration has been recorded for Alego Usonga.`,
      `
        <div><strong>Farmer Name:</strong> ${fullName}</div>
        <div><strong>Contact Phone:</strong> ${phone}</div>
        <div><strong>Ward Location:</strong> ${ward}</div>
        <div><strong>Identified Area:</strong> ${ha} Hectares</div>
        <div><strong>Outgrower Reference ID:</strong> <span style="color:var(--color-primary); font-weight:800;">${sampleRef}</span></div>
        <div style="margin-top:0.6rem; color:var(--color-text-muted); font-size:0.8rem;">
          <em>*Sample Demo:</em> A Kipenzi Extension Officer will visit your farm for soil assessment and cane supply contract signing registered under the Kenya Sugar Board.
        </div>
      `
    );
    wizardForm.reset();
    currentStep = 1;
    updateWizardUI();
  });
}

function populateWizardSummary() {
  const name = document.getElementById('wiz-farmer-name')?.value || '—';
  const phone = document.getElementById('wiz-phone')?.value || '—';
  const ward = document.getElementById('wiz-ward')?.value || '—';
  const collectionPoint = document.getElementById('wiz-collection')?.value || '—';
  const hectares = document.getElementById('wiz-hectares')?.value || '—';
  const currentCrop = document.getElementById('wiz-crop')?.value || '—';
  const supportType = document.querySelector('input[name="support-pkg"]:checked')?.value || 'Full Agribusiness Package (Seed + Prep + Inputs)';

  const summaryDiv = document.getElementById('wizard-summary-display');
  if (summaryDiv) {
    summaryDiv.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.88rem;">
        <div><strong>Full Name:</strong> ${name}</div>
        <div><strong>Phone:</strong> ${phone}</div>
        <div><strong>Ward:</strong> ${ward}</div>
        <div><strong>Nearest Collection Point:</strong> ${collectionPoint}</div>
        <div><strong>Cane Acreage:</strong> ${hectares} Hectares</div>
        <div><strong>Current Crop:</strong> ${currentCrop}</div>
      </div>
      <div style="margin-top: 0.75rem; font-size: 0.88rem; padding-top: 0.75rem; border-top: 1px dashed var(--color-border);">
        <strong>Selected Support Package:</strong> ${supportType}
      </div>
    `;
  }
}

/* ==========================================================================
   11. PAYMENT ESTIMATOR COMPONENT (7-DAY STATUTORY PROMISE)
   ========================================================================== */
function initPaymentEstimator() {
  const tonnesSlider = document.getElementById('estimator-tonnes-slider');
  const tonnesInput = document.getElementById('estimator-tonnes-input');
  const priceInput = document.getElementById('estimator-price-input');
  const creditDeductionCheck = document.getElementById('estimator-deduct-credit');
  const displayPayout = document.getElementById('estimator-net-payout');
  const displayGross = document.getElementById('estimator-gross');
  const displayDeduction = document.getElementById('estimator-deduction-val');
  const displayDayPromise = document.getElementById('estimator-pay-date');

  if (!tonnesSlider || !displayPayout) return;

  const calculate = () => {
    const tonnes = parseFloat(tonnesSlider.value) || 0;
    const pricePerTonne = parseFloat(priceInput?.value) || 5100;
    const hasCredit = creditDeductionCheck?.checked || false;

    const deductionPerTonne = hasCredit ? 850 : 0;
    const gross = tonnes * pricePerTonne;
    const totalDeductions = tonnes * deductionPerTonne;
    const net = Math.max(0, gross - totalDeductions);

    if (tonnesInput) tonnesInput.value = tonnes;
    if (displayGross) displayGross.textContent = `KES ${gross.toLocaleString('en-US')}`;
    if (displayDeduction) displayDeduction.textContent = `- KES ${totalDeductions.toLocaleString('en-US')}`;
    displayPayout.textContent = `KES ${net.toLocaleString('en-US')}`;

    const deliveryDate = new Date();
    const payoutDate = new Date(deliveryDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    if (displayDayPromise) {
      displayDayPromise.textContent = payoutDate.toLocaleDateString('en-KE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  };

  tonnesSlider.addEventListener('input', () => {
    if (tonnesInput) tonnesInput.value = tonnesSlider.value;
    calculate();
  });

  if (tonnesInput) {
    tonnesInput.addEventListener('input', () => {
      tonnesSlider.value = tonnesInput.value;
      calculate();
    });
  }

  if (priceInput) priceInput.addEventListener('input', calculate);
  if (creditDeductionCheck) creditDeductionCheck.addEventListener('change', calculate);

  calculate();
}

/* ==========================================================================
   12. FARMER PORTAL WITH SKELETON LOADERS
   ========================================================================== */
function initFarmerPortal() {
  const loginForm = document.getElementById('portal-login-form');
  const loginCard = document.getElementById('portal-login-card');
  const dashboardCard = document.getElementById('portal-dashboard-card');
  const logoutBtn = document.getElementById('portal-logout-btn');

  if (loginForm && dashboardCard) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (loginCard) loginCard.style.display = 'none';
      dashboardCard.style.display = 'block';
      showToast('Welcome back, John Ochieng\'! Portal loaded.', 'success');
    });
  }

  if (logoutBtn && loginCard && dashboardCard) {
    logoutBtn.addEventListener('click', () => {
      dashboardCard.style.display = 'none';
      loginCard.style.display = 'block';
      showToast('Signed out from Farmer Portal.', 'info');
    });
  }

  const tabButtons = document.querySelectorAll('.portal-tab-btn');
  const tabPanes = document.querySelectorAll('.portal-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.style.display = 'none');

      btn.classList.add('active');
      const targetPane = document.getElementById(btn.getAttribute('data-tab-target'));
      if (targetPane) {
        // Show subtle skeleton flash for 250ms for realistic premium feel
        targetPane.style.opacity = '0.3';
        targetPane.style.display = 'block';
        setTimeout(() => {
          targetPane.style.opacity = '1';
          targetPane.style.transition = 'opacity 0.25s ease';
        }, 200);
      }
    });
  });
}

/* ==========================================================================
   13. FORM INTERCEPTORS & TOAST NOTIFICATIONS
   ========================================================================== */
function initFormInterceptors() {
  const formsToIntercept = [
    { id: 'contact-page-form', title: 'Message Sent Successfully', desc: 'Our Alego Usonga desk will respond via phone/email.' },
    { id: 'grievance-form', title: 'Community Feedback Logged', desc: 'Your public comment has been registered under the EIA community liaison office.' },
    { id: 'harvest-booking-form', title: 'Harvest Booking Received', desc: 'Logistics coordinator assigned to inspect cane maturity (18-22 months).' },
    { id: 'investor-inquiry-form', title: 'Investor Prospectus Requested', desc: 'The Kipenzi Sugar Information Memorandum has been queued for your email.' },
    { id: 'tender-application-form', title: 'Supplier Expression Received', desc: 'Procurement team will evaluate your pre-qualification documents.' },
    { id: 'byproduct-inquiry-form', title: 'Industrial Inquiry Logged', desc: 'Commercial team will supply molasses/bagasse pricing schedules.' }
  ];

  formsToIntercept.forEach(item => {
    const form = document.getElementById(item.id);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const refNo = `DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
        openFeedbackModal(
          item.title,
          item.desc,
          `
            <div><strong>Status:</strong> Successfully Submitted [Demo Mode]</div>
            <div><strong>Reference Ticket:</strong> <span style="color:var(--color-primary); font-weight:700;">#${refNo}</span></div>
            <div><strong>Timestamp:</strong> ${new Date().toLocaleString()}</div>
            <p style="margin-top:0.5rem; color:var(--color-text-muted); font-size:0.8rem;">
              *No backend required. This mock demonstrates complete end-to-end user workflows for Kipenzi Sugar Company Limited.
            </p>
          `
        );
        showToast(`${item.title}! Ref: #${refNo}`, 'success');
        form.reset();
      });
    }
  });
}

/* ==========================================================================
   14. MOBILE NAVIGATION HELPERS (Sticky Bottom Bar, Back to Top, Carousel Sync)
   ========================================================================== */
function renderMobileNavigationHelpers() {
  if (document.getElementById('mobile-bottom-bar')) return;

  // 1. Sticky Bottom Bar (4 Key Destinations: Home, Farmers, Register, Contact)
  const bottomBar = document.createElement('nav');
  bottomBar.id = 'mobile-bottom-bar';
  bottomBar.setAttribute('aria-label', 'Mobile Navigation');

  const path = window.location.pathname.toLowerCase();
  const isHome = path.endsWith('index.html') || path.endsWith('/') || path === '';
  const isFarmers = path.endsWith('outgrowers.html') && !window.location.hash.includes('register');
  const isRegister = window.location.hash.includes('register');
  const isContact = path.endsWith('contact.html');

  bottomBar.innerHTML = `
    <a href="index.html" class="mobile-bottom-item ${isHome ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <span>Home</span>
    </a>
    <a href="outgrowers.html" class="mobile-bottom-item ${isFarmers && !isRegister ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path>
        <path d="M12 6v12"></path>
        <path d="M8 10l4-4 4 4"></path>
      </svg>
      <span>Farmers</span>
    </a>
    <a href="outgrowers.html#register" class="mobile-bottom-item ${isRegister ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>
      <span>Register</span>
    </a>
    <a href="contact.html" class="mobile-bottom-item ${isContact ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span>Contact</span>
    </a>
  `;
  document.body.appendChild(bottomBar);

  // 2. Back to Top Floating Button (Tap target >= 44px)
  if (!document.getElementById('back-to-top-btn')) {
    const bttBtn = document.createElement('button');
    bttBtn.id = 'back-to-top-btn';
    bttBtn.setAttribute('aria-label', 'Back to top');
    bttBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(bttBtn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        bttBtn.classList.add('visible');
      } else {
        bttBtn.classList.remove('visible');
      }
    }, { passive: true });

    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Auto-open first accordion item on mobile
  if (window.innerWidth <= 768) {
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion && !firstAccordion.classList.contains('open')) {
      firstAccordion.classList.add('open');
    }
  }
}

/* ==========================================================================
   15. HORIZONTAL CAROUSEL INDICATOR DOTS
   ========================================================================== */
function initCarouselIndicators() {
  const carousels = document.querySelectorAll(
    '.grid-3:not(.no-carousel), .carousel-mobile, .news-grid, .testimonials-grid, .doc-grid, .process-strip-flow'
  );

  carousels.forEach(carousel => {
    const items = carousel.children;
    if (items.length <= 1) return;

    if (carousel.nextElementSibling && carousel.nextElementSibling.classList.contains('carousel-dots-indicator')) {
      return;
    }

    const indicator = document.createElement('div');
    indicator.className = 'carousel-dots-indicator';
    indicator.setAttribute('aria-hidden', 'true');

    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('div');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      indicator.appendChild(dot);
    }

    carousel.parentNode.insertBefore(indicator, carousel.nextSibling);

    carousel.addEventListener('scroll', () => {
      const scrollPos = carousel.scrollLeft;
      const cardWidth = items[0].offsetWidth || 1;
      const activeIndex = Math.min(items.length - 1, Math.round(scrollPos / cardWidth));
      const dots = indicator.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }, { passive: true });
  });
}

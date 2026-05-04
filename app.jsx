const { useState } = React;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const openRequest = () => { setModalOpen(true); setNavOpen(false); };
  const closeRequest = () => setModalOpen(false);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark"></span>
            <span className="brand-name">
              once upon a party
              <small>by Chelsea McKee · OKC</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#process">Process</a>
          </div>
          <button className="btn btn-primary" onClick={openRequest}>
            Request an event <span className="btn-arrow">→</span>
          </button>
          <button
            className={`nav-hamburger ${navOpen ? 'open' : ''}`}
            onClick={() => setNavOpen(o => !o)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {navOpen && (
          <div className="nav-drawer">
            <a href="#services" onClick={closeNav}>Services</a>
            <a href="#about" onClick={closeNav}>About</a>
            <a href="#gallery" onClick={closeNav}>Gallery</a>
            <a href="#process" onClick={closeNav}>Process</a>
            <button className="btn btn-primary drawer-cta" onClick={openRequest}>
              Request an event <span className="btn-arrow">→</span>
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-eyebrow-row">
                <span className="eyebrow">Oklahoma City · Est. 2025</span>
              </div>
              <h1>
                Balloons that<br />
                make people <span className="underline">stop</span><br />
                and smile.
              </h1>
              <p className="hero-sub">
                Custom balloon installations, garlands, and arches for birthdays,
                gender reveals, weddings, and corporate events across OKC. Designed
                + installed by Chelsea McKee.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary" onClick={openRequest}>
                  Request an event <span className="btn-arrow">→</span>
                </button>
                <a href="#gallery" className="btn btn-secondary">See recent work</a>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <span className="num">300+</span>
                  <span className="lbl">Events styled</span>
                </div>
                <div className="hero-meta-item">
                  <span className="num">4.9★</span>
                  <span className="lbl">Avg. rating</span>
                </div>
                <div className="hero-meta-item">
                  <span className="num">24h</span>
                  <span className="lbl">Reply time</span>
                </div>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <img src="assets/balloons-arch-hero.jpg" alt="Chelsea building a peach, sky blue, and cream balloon installation" />
              <span className="balloon sky float b-1"></span>
              <span className="balloon peach float-slow b-2"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="strip">
        <div className="strip-track">
          <span>
            Birthdays <span className="dot"></span>
            Gender Reveals <span className="dot"></span>
            Corporate Events <span className="dot"></span>
            Weddings <span className="dot"></span>
            Baby Showers <span className="dot"></span>
            Grand Openings <span className="dot"></span>
            Holiday Installs <span className="dot"></span>
          </span>
          <span>
            Birthdays <span className="dot"></span>
            Gender Reveals <span className="dot"></span>
            Corporate Events <span className="dot"></span>
            Weddings <span className="dot"></span>
            Baby Showers <span className="dot"></span>
            Grand Openings <span className="dot"></span>
            Holiday Installs <span className="dot"></span>
          </span>
        </div>
      </div>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Services</span>
              <h2 style={{marginTop: 16}}>Setups for <em>every</em> kind of celebration.</h2>
            </div>
            <p className="lead">
              Each design is built to your space, your colors, and the moment
              you're trying to create. Pick a starting point — we'll take it
              from there.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard num="01" title="Garland Installs" body="Organic balloon garlands draped across walls, arches, mantels, or backdrops. The classic centerpiece." tag="Most popular" tagClass="" />
            <ServiceCard num="02" title="Gender Reveals" body="Pop-and-confetti moments, color-coded archways, and the photo every parent wants to keep." tag="Sky / Peach" tagClass="sky" />
            <ServiceCard num="03" title="Birthday Setups" body="Kids', milestone, sweet sixteen — themed arches and number balloons that make the cake table sing." tag="Themed" tagClass="" />
            <ServiceCard num="04" title="Corporate Events" body="Brand-color installations for product launches, ribbon cuttings, conferences, and holiday parties." tag="On-brand" tagClass="cream" />
            <ServiceCard num="05" title="Bridal & Baby Showers" body="Soft, photogenic palettes designed to make your shower feel like a magazine spread." tag="Editorial" tagClass="" />
            <ServiceCard num="06" title="Grand Openings" body="Storefront ribbons, organic columns, and street-facing arches that pull people in off the sidewalk." tag="High-impact" tagClass="sky" />
          </div>
        </div>
      </section>

      {/* About / Chelsea */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div style={{position: 'relative'}}>
              <div className="about-photo">
                <img src="assets/chelsea-portrait.jpg" alt="Chelsea McKee, founder of Once Upon a Party" />
              </div>
              <div className="about-badge">
                <div className="inner">made with<br/>love<br/>in OKC</div>
              </div>
            </div>
            <div className="about-content">
              <span className="eyebrow">Meet Chelsea</span>
              <h2>Hi — I'm <em>Chelsea</em>, the one behind every install.</h2>
              <p>
                I started Once Upon a Party because the best moments in life
                deserve a setting worth remembering. Every garland, every
                arch, every balloon column is hand-built by me, on-site, in
                the colors and shapes that fit your story.
              </p>
              <p>
                I'm based in Oklahoma City and travel across the metro for
                events of every size — from intimate backyards to ballroom
                galas. No two setups have ever been the same, and I like it
                that way.
              </p>
              <div className="signature">
                Chelsea
                <small>Founder · Designer · Balloon-wrangler</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Recent Work</span>
              <h2 style={{marginTop: 16}}>A few <em>moments</em><br/>we've made.</h2>
            </div>
            <p className="lead">
              From small-and-sweet to wall-to-wall takeovers — a peek at
              setups from the last few seasons.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="g-item g-1">
              <img src="assets/IMG_0876.jpg" alt="Royal blue, white, and silver balloon arch" />
              <span className="label">Corporate arch · OKC</span>
            </div>
            <div className="g-item g-2">
              <img src="assets/IMG_0878.jpg" alt="Winnie the Pooh first birthday balloon arch with yellow and dusty blue garland" />
              <span className="label">First Beeday · OKC</span>
            </div>
            <div className="g-item g-3">
              <img src="assets/IMG_0881.jpg" alt="Burgundy and chrome balloon columns with Happy Birthday neon sign" />
              <span className="label">Birthday backdrop · OKC</span>
            </div>
            <div className="g-item g-4">
              <blockquote className="g-quote">
                "Chelsea turned a plain gym into something my daughter still talks about — six months later."
                <cite>— Sarah K., birthday client</cite>
              </blockquote>
            </div>
            <div className="g-item g-5">
              <img src="assets/IMG_0884.jpg" alt="Pink, teal, and burgundy balloon column with gold gift bow accents" />
              <span className="label">Holiday column · OKC</span>
            </div>
            <div className="g-item g-6">
              <img src="assets/IMG_0877.jpg" alt="Royal blue and silver balloon columns flanking a blue drape backdrop" />
              <span className="label">Event columns · OKC</span>
            </div>
            <div className="g-item g-7">
              <img src="assets/IMG_0879.jpg" alt="Pink and yellow balloon columns with star foil accents" />
              <span className="label">Star columns · OKC</span>
            </div>
            <div className="g-item g-8">
              <img src="assets/IMG_0880.jpg" alt="Hot Wheels themed number 3 balloon sculpture in blue and orange" />
              <span className="label">Hot Wheels 3rd birthday · OKC</span>
            </div>
            <div className="g-item g-9">
              <img src="assets/IMG_0882.jpg" alt="Superman themed number 4 balloon sculpture in red, white, and blue" />
              <span className="label">Superman 4th birthday · OKC</span>
            </div>
            <div className="g-item g-10">
              <img src="assets/IMG_0883.jpg" alt="Twin 1 and Twin 2 chrome gender reveal balloons with pink and blue ribbons" />
              <span className="label">Twins gender reveal · OKC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 style={{marginTop: 16}}>Four steps, <em>zero stress.</em></h2>
            </div>
            <p className="lead">
              Booking a balloon install shouldn't feel like another item on
              the to-do list. Here's how we keep it simple.
            </p>
          </div>

          <div className="process-grid">
            <div className="p-step">
              <div className="step-num">01</div>
              <h4>Tell us about it</h4>
              <p>Send a quick request — date, vibe, location. Two minutes, tops.</p>
            </div>
            <div className="p-step">
              <div className="step-num">02</div>
              <h4>Get a proposal</h4>
              <p>Within 24 hours, you'll have a custom mockup, palette, and quote.</p>
            </div>
            <div className="p-step">
              <div className="step-num">03</div>
              <h4>Lock the date</h4>
              <p>50% deposit holds your spot. The rest is due the week of your event.</p>
            </div>
            <div className="p-step">
              <div className="step-num">04</div>
              <h4>We install</h4>
              <p>Chelsea arrives, sets up on-site, and leaves you a setup that wows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{paddingTop: 0}}>
        <div className="container">
          <div className="cta-block">
            <span className="eyebrow" style={{color: 'var(--peach)'}}>Ready when you are</span>
            <h2 style={{marginTop: 16}}>Let's make<br/>something <em>worth</em><br/>remembering.</h2>
            <p>Most dates book 2–4 weeks in advance. Send a request today and we'll get back to you within a day.</p>
            <button className="btn btn-peach" onClick={openRequest}>
              Request your event <span className="btn-arrow">→</span>
            </button>

            <div className="cta-balloons">
              <span className="balloon peach float cb-1"></span>
              <span className="balloon sky float-slow cb-2"></span>
              <span className="balloon cream float cb-3"></span>
              <span className="balloon peach float-slow cb-4"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#" className="brand">
                <span className="brand-mark"></span>
                <span className="brand-name">
                  once upon a party
                  <small>by Chelsea McKee</small>
                </span>
              </a>
              <p className="footer-tag">
                Custom balloon design <em>for every</em> celebration in OKC.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Garland Installs</li>
                <li>Gender Reveals</li>
                <li>Birthdays</li>
                <li>Corporate</li>
                <li>Weddings</li>
              </ul>
            </div>
            <div>
              <h4>Studio</h4>
              <ul>
                <li>Oklahoma City, OK</li>
                <li>By appointment</li>
                <li>hello@onceuponaparty.co</li>
                <li>(405) 555-0100</li>
              </ul>
            </div>
            <div>
              <h4>Follow</h4>
              <ul>
                <li><a href="https://www.instagram.com/once_upon_a_party_okc?igsh=MXhiczg2NXc1ZXg2aw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li>TikTok</li>
                <li>Pinterest</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Once Upon a Party · Chelsea McKee</span>
            <span>Made with peach, sky & cream in OKC</span>
          </div>
        </div>
      </footer>

      <RequestModal open={modalOpen} onClose={closeRequest} />
    </>
  );
}

function ServiceCard({ num, title, body, tag, tagClass }) {
  const featClass = `feat-${num}`;
  return (
    <div className={`svc-card feat-${parseInt(num)}`}>
      <span className="svc-num">{num}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="svc-foot">
        <span className={`svc-tag ${tagClass}`}>
          <span className="pip"></span>{tag}
        </span>
        <span className="svc-arrow">→</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

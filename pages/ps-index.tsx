import * as React from 'react';
import '../src/styles/scss/style.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const doc = document;
    const rootEl = doc.documentElement;
    const body = doc.body;
    /* global ScrollReveal */
    /// @ts-ignore
    const sr = (window['sr'] = ScrollReveal({ mobile: false }));

    rootEl.classList.remove('no-js');
    rootEl.classList.add('js');

    window.addEventListener('load', function() {
      body.classList.add('is-loaded');
    });

    // Reveal animations
    function revealAnimations() {
      sr.reveal('.features .section-title, .features-illustration, .feature', {
        delay: 300,
        duration: 600,
        distance: '60px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'bottom',
        viewFactor: 0.2,
        interval: 150
      });
      sr.reveal(
        '.feature-extended:nth-child(odd) .feature-extended-body, .feature-extended:nth-child(even) .feature-extended-image',
        {
          duration: 600,
          distance: '40px',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          origin: 'right',
          viewFactor: 0.5
        }
      );
      sr.reveal(
        '.feature-extended:nth-child(even) .feature-extended-body, .feature-extended:nth-child(odd) .feature-extended-image',
        {
          duration: 600,
          distance: '40px',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          origin: 'left',
          viewFactor: 0.5
        }
      );
      sr.reveal('.pricing-table, .testimonial, .cta-inner', {
        duration: 600,
        distance: '60px',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        origin: 'bottom',
        viewFactor: 0.5,
        interval: 150
      });
    }

    if (body.classList.contains('has-animations')) {
      window.addEventListener('load', revealAnimations);
    }
  }
  render() {
    return (
      <div className="body-wrap boxed-container">
        <header className="site-header text-light">
          <div className="container">
            <div className="site-header-inner">
              <div className="brand header-brand">
                <h1 className="m-0">
                  <a href="#">
                    <img className="header-logo-image" src="/static/images/logo.svg" alt="Logo" />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="hero text-center text-light">
            <div className="container-sm">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Landing template for startups</h1>
                  <p className="hero-paragraph">
                    Our landing page template works on all devices, so you only have to set it up
                    once, and get beautiful results forever.
                  </p>
                  <div className="hero-cta">
                    <a className="button button-primary button-wide-mobile" href="#">
                      Early access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="features section">
            <div className="container">
              <div className="features-inner section-inner has-bottom-divider">
                <div className="features-header text-center">
                  <div className="container-sm">
                    <h2 className="section-title mt-0 is-revealing">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse-cillum dolore
                      eu fugiat pariatur.
                    </h2>
                    <img
                      className="features-illustration is-revealing"
                      src="/static/images/features-illustration.svg"
                      alt="Features illustration"
                    />
                  </div>
                </div>
                <div className="features-wrap">
                  <div className="feature text-center is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon mb-16">
                        <img src="/static/images/feature-01.svg" alt="Feature 01" />
                      </div>
                      <div className="feature-content">
                        <h4 className="feature-title mt-0 mb-8">Discover</h4>
                        <p className="text-sm mb-0">
                          A pseudo-Latin text used in web design, layout, and printing in place of
                          things to emphasise design.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature text-center is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon mb-16">
                        <img src="/static/images/feature-02.svg" alt="Feature 02" />
                      </div>
                      <div className="feature-content">
                        <h4 className="feature-title mt-0 mb-8">Discover</h4>
                        <p className="text-sm mb-0">
                          A pseudo-Latin text used in web design, layout, and printing in place of
                          things to emphasise design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-wrap">
                  <div className="feature text-center is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon mb-16">
                        <img src="/static/images/feature-03.svg" alt="Feature 03" />
                      </div>
                      <div className="feature-content">
                        <h4 className="feature-title mt-0 mb-8">Discover</h4>
                        <p className="text-sm mb-0">
                          A pseudo-Latin text used in web design, layout, and printing in place of
                          things to emphasise design.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature text-center is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon mb-16">
                        <img src="/static/images/feature-04.svg" alt="Feature 04" />
                      </div>
                      <div className="feature-content">
                        <h4 className="feature-title mt-0 mb-8">Discover</h4>
                        <p className="text-sm mb-0">
                          A pseudo-Latin text used in web design, layout, and printing in place of
                          things to emphasise design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="features-extended section">
            <div className="features-extended-inner section-inner">
              <div className="features-extended-header text-center">
                <div className="container-sm">
                  <h2 className="section-title mt-0">What makes Ruby great</h2>
                  <p className="section-paragraph">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur sed vulputate mi sit.
                  </p>
                </div>
              </div>
              <div className="features-extended-wrap">
                <div className="container">
                  <div className="feature-extended">
                    <div className="feature-extended-image is-revealing">
                      <img src="/static/images/feature-extended-01.svg" alt="Feature extended 01" />
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0">Freedom from designers</h3>
                      <p className="mb-0">
                        Nisi porta lorem mollis aliquam ut. Ac tincidunt vitae semper quis lectus
                        nulla at volutpat. Est ultricies integer quis auctor elit sed.
                      </p>
                    </div>
                  </div>
                  <div className="feature-extended">
                    <div className="feature-extended-image is-revealing">
                      <img src="/static/images/feature-extended-02.svg" alt="Feature extended 02" />
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0">Freedom from designers</h3>
                      <p className="mb-0">
                        Nisi porta lorem mollis aliquam ut. Ac tincidunt vitae semper quis lectus
                        nulla at volutpat. Est ultricies integer quis auctor elit sed.
                      </p>
                    </div>
                  </div>
                  <div className="feature-extended">
                    <div className="feature-extended-image is-revealing">
                      <img src="/static/images/feature-extended-03.svg" alt="Feature extended 03" />
                    </div>
                    <div className="feature-extended-body is-revealing">
                      <h3 className="mt-0">Freedom from designers</h3>
                      <p className="mb-0">
                        Nisi porta lorem mollis aliquam ut. Ac tincidunt vitae semper quis lectus
                        nulla at volutpat. Est ultricies integer quis auctor elit sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing section text-light">
            <div className="container">
              <div className="pricing-inner section-inner">
                <h2 className="section-title mt-0 text-center">Simple, transarent pricing</h2>
                <div className="pricing-tables-wrap">
                  <div className="pricing-table is-revealing">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header mb-24 pb-24">
                          <div className="pricing-table-title text-sm mt-0 mb-12">Individual</div>
                          <div className="pricing-table-price">
                            <span className="pricing-table-price-currency">$</span>
                            <span className="pricing-table-price-amount h1">19</span>/m
                          </div>
                        </div>
                        <div className="pricing-table-features-title text-xs mb-24">
                          Top features
                        </div>
                        <ul className="pricing-table-features list-reset text-xs">
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta">
                        <a className="button button-primary button-block" href="#">
                          Free trial
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-table is-revealing">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header mb-24 pb-24">
                          <div className="pricing-table-title text-sm mt-0 mb-12">Agency</div>
                          <div className="pricing-table-price">
                            <span className="pricing-table-price-currency">$</span>
                            <span className="pricing-table-price-amount h1">49</span>/m
                          </div>
                        </div>
                        <div className="pricing-table-features-title text-xs mb-24">
                          Top features
                        </div>
                        <ul className="pricing-table-features list-reset text-xs">
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta">
                        <a className="button button-primary button-block" href="#">
                          Free trial
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-table is-revealing">
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header mb-24 pb-24">
                          <div className="pricing-table-title text-sm mt-0 mb-12">Enterprise</div>
                          <div className="pricing-table-price">
                            <span className="pricing-table-price-currency">$</span>
                            <span className="pricing-table-price-amount h1">69</span>/m
                          </div>
                        </div>
                        <div className="pricing-table-features-title text-xs mb-24">
                          Top features
                        </div>
                        <ul className="pricing-table-features list-reset text-xs">
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                          <li>
                            <span>Excepteur sint occaecat velit</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-table-cta">
                        <a className="button button-secondary button-block" href="#">
                          Buy it now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonials section">
            <div className="container">
              <div className="testimonials-inner section-inner">
                <h2 className="section-title mt-0 text-center">Loved by users worldwide</h2>
                <div className="testimonials-wrap">
                  <div className="testimonial is-revealing">
                    <div className="testimonial-inner">
                      <div className="testimonial-main mb-32">
                        <div className="testimonial-rating mb-24">
                          <img src="/static/images/5-stars.svg" alt="Rating" />
                        </div>
                        <div className="testimonial-body">
                          <p className="text-sm m-0">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and
                            publishing industries for previewing layouts and visual mockups.
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-image">
                          <img src="/static/images/testimonial-01.png" alt="Mark Walker" />
                        </div>
                        <div className="testimonial-name text-sm">Mark Walker</div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial is-revealing">
                    <div className="testimonial-inner">
                      <div className="testimonial-main mb-32">
                        <div className="testimonial-rating mb-24">
                          <img src="/static/images/5-stars.svg" alt="Rating" />
                        </div>
                        <div className="testimonial-body">
                          <p className="text-sm m-0">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and
                            publishing industries for previewing layouts and visual mockups.
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-image">
                          <img src="/static/images/testimonial-02.png" alt="Marta Smirth" />
                        </div>
                        <div className="testimonial-name text-sm">Marta Smirth</div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial is-revealing">
                    <div className="testimonial-inner">
                      <div className="testimonial-main mb-32">
                        <div className="testimonial-rating mb-24">
                          <img src="/static/images/5-stars.svg" alt="Rating" />
                        </div>
                        <div className="testimonial-body">
                          <p className="text-sm m-0">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and
                            publishing industries for previewing layouts and visual mockups.
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-image">
                          <img src="/static/images/testimonial-03.png" alt="Evan Hill" />
                        </div>
                        <div className="testimonial-name text-sm">Evan Hill</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta section text-light">
            <div className="container">
              <div className="cta-inner section-inner is-revealing">
                <h3 className="section-title mt-0">Nisi porta lorem mollis aliquam ut.</h3>
                <div className="cta-cta">
                  <a className="button button-wide-mobile" href="#">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="site-footer-inner">
              <div className="site-footer-top">
                <div className="site-footer-unit">
                  <div className="site-footer-unit-inner">
                    <div className="brand footer-brand mb-24">
                      <a href="#">
                        <img src="/static/images/logo.svg" alt="Logo" />
                      </a>
                    </div>
                    <ul className="footer-social-links list-reset">
                      <li>
                        <a href="#">
                          <span className="screen-reader-text">Facebook</span>
                          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                              fill="#FFF"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="screen-reader-text">Twitter</span>
                          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                              fill="#FFF"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="screen-reader-text">Google</span>
                          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                              fill="#FFF"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="site-footer-unit">
                  <div className="site-footer-unit-inner">
                    <div className="footer-top-links">
                      <div className="footer-title mb-16">Company</div>
                      <ul className="list-reset">
                        <li>
                          <a href="#">Dummy text used</a>
                        </li>
                        <li>
                          <a href="#">The purpose of lorem</a>
                        </li>
                        <li>
                          <a href="#">Filler text can be very useful</a>
                        </li>
                        <li>
                          <a href="#">Be on design</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="site-footer-unit">
                  <div className="site-footer-unit-inner">
                    <div className="footer-top-links">
                      <div className="footer-title mb-16">Use cases</div>
                      <ul className="list-reset">
                        <li>
                          <a href="#">Consectetur adipiscing</a>
                        </li>
                        <li>
                          <a href="#">Lorem Ipsum is place</a>
                        </li>
                        <li>
                          <a href="#">Excepteur sint</a>
                        </li>
                        <li>
                          <a href="#">Occaecat cupidatat</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="site-footer-unit">
                  <div className="site-footer-unit-inner">
                    <div className="footer-top-links">
                      <div className="footer-title mb-16">Docs</div>
                      <ul className="list-reset">
                        <li>
                          <a href="#">The purpose of lorem</a>
                        </li>
                        <li>
                          <a href="#">Dummy text used</a>
                        </li>
                        <li>
                          <a href="#">Excepteur sint</a>
                        </li>
                        <li>
                          <a href="#">Occaecat cupidatat</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-footer-bottom">
                <ul className="footer-bottom-links list-reset">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul>
                <div className="footer-copyright">&copy; 2018 Ruby, all rights reserved</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Index;

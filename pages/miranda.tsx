import * as React from 'react';
import controlTowerStyles from '../src/styles/miranda-styles/style.module.scss';
import mirandaStyles from '../src/styles/miranda-styles/style.module.scss';
import { camelCase } from 'lodash';

const styles = { ...controlTowerStyles, ...mirandaStyles };
console.log(styles);
const { 'body-wrap': bodyWrap, 'boxed-container': boxedContainer } = styles;

const classes = classes => {
  const classesArr = classes.split(' ');
  return classesArr.reduce((acc, className) => {
    if (styles[className] === undefined) {
      console.log(className);
    }
    return [...acc, styles[className]];
  }, []);
};

const dropboxStyle = (dropShadow: number): React.CSSProperties => {
  return {
    mixBlendMode: 'multiply',
    filter: `url(#dropshadow-${dropShadow})`
  };
};
class Index extends React.Component {
  private styleProps = {
    dropboxStyle
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className={classes('body-wrap boxed-container')}>
        <header className={classes('site-header')}>
          <div className={classes('container')}>
            <div className={classes('site-header-inner')}>
              <div className={classes('brand header-brand')}>
                <h1 className={classes('m-0')}>
                  <a href="#">
                    <img id="logo" src="/static/images/miranda/logo-white.png" />
                  </a>
                </h1>
              </div>
              <ul className={classes('header-links list-reset m-0')}>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a className={classes('button button-sm button-shadow')} href="#">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <main>
          <section className={classes('hero text-light text-center')}>
            <div className={classes('container-sm')}>
              <div className={classes('hero-inner')}>
                <h1 className={classes('hero-title h2-mobile mt-0 is-revealing')}>
                  Modern Multi-Modal TMS
                </h1>
                <p className={classes('hero-paragraph is-revealing')}>
                  Automated shipping through machine learning to focus on retailer compliance
                </p>
                <p className={classes('hero-cta is-revealing')}>
                  <a className={classes('button button-secondary button-shadow')} href="#">
                    Get started now
                  </a>
                </p>
                <div className={classes('hero-media')}>
                  <iframe
                    height="100%"
                    width="100%"
                    src="https://www.youtube-nocookie.com/embed/e2--7saJFio?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={classes('clients section')}>
            <div className={classes('container')}>
              <div className={classes('clients-inner section-inner has-top-divider')}>
                <div className={classes('container-sm')}>
                  <ul className={classes('list-reset mb-0')}>
                    <li>
                      <span className={classes('screen-reader-text')}>CaseStack</span>
                      <img className={classes('client')} src="/static/images/miranda/cs.png" />
                    </li>
                    <li>
                      <span className={classes('screen-reader-text')}>Hub Group</span>
                      <img className={classes('client')} src="/static/images/miranda/hub.png" />
                    </li>
                    <li>
                      <span className={classes('screen-reader-text')}>Deringer</span>
                      <img
                        className={classes('client')}
                        src="/static/images/miranda/deringer.png"
                      />
                    </li>
                    <li>
                      <span className={classes('screen-reader-text')}>Uber</span>
                      <svg width="132" height="40" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M31.045 9h4.038v12.86c0 6.765-4.306 9.14-10.553 9.14C18.306 31 14 28.625 14 21.86V9.514c0-.358.178-.515.535-.515h4.039v12.658c0 4.055 1.784 5.735 5.956 5.735 4.195 0 5.98-1.68 5.98-5.735V9.515c0-.358.178-.515.535-.515zm45.714 3.517v5.422h10.218c.178 0 .245.09.178.269l-1.115 2.778c-.112.246-.268.358-.602.358h-6.002c-1.963 0-2.677.605-2.677 1.927v3.83H90.59c.179 0 .246.09.179.27l-1.16 2.89c-.112.246-.268.358-.603.358H73.86c-1.16 0-1.607-.403-1.607-1.277V10.501c0-1.053.58-1.501 2.097-1.501h16.242c.179 0 .246.09.179.246l-1.16 2.913c-.112.246-.268.358-.603.358H76.76zM63.93 24.637c0 4.324-3.034 5.982-7.295 5.982H45.346c-1.182 0-1.606-.403-1.606-1.277V10.501c0-1.053.557-1.501 2.097-1.501h9.17c4.015 0 7.897.695 7.897 5.489 0 2.06-.736 3.808-2.499 4.727 2.432.65 3.525 2.845 3.525 5.421zm-15.75-6.63h7.161c2.365 0 3.034-.92 3.034-2.801 0-1.882-.67-2.778-3.034-2.778h-7.162v5.578zM59.4 24.233c0-1.994-.691-2.98-3.235-2.98H50.88c-1.963 0-2.7.605-2.7 1.927v4.01h7.987c2.544 0 3.235-.985 3.235-2.957zm59.346 6.385h-4.105c-.335 0-.469-.134-.603-.358l-4.35-7.886h-3.994c-1.963 0-2.7.605-2.7 1.926v6.318H99.07c-.357 0-.535-.18-.535-.515V10.5c0-1.053.58-1.501 2.097-1.501h9.214c5.377 0 8.612 1.411 8.612 6.654 0 4.055-1.941 5.645-4.35 6.273l4.84 8.311c.09.135.09.381-.2.381zm-4.82-14.876c0-2.195-.602-3.27-3.413-3.27h-7.518v6.541h7.518c2.811 0 3.414-1.053 3.414-3.27z"
                          fill="#93A2B3"
                          fillRule="nonzero"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={classes('features-extended section')}>
            <div className={classes('container')}>
              <div className={classes('features-extended-inner section-inner has-top-divider')}>
                <div className={classes(' text-center')}>
                  <div className={classes('container-sm')}>
                    <h2 className={classes('section-title mt-0')}>
                      Omni Modal that meets your needs
                    </h2>
                    <p className={classes('section-paragraph')}>
                      A tms that is so great, you'll be amazed.
                    </p>
                  </div>
                </div>
                <div className={classes('feature-extended')}>
                  <div className={classes('feature-extended-image is-revealing')}>
                    <svg
                      width="480"
                      height="360"
                      viewBox="0 0 480 360"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter
                          x="-500%"
                          y="-500%"
                          width="1000%"
                          height="1000%"
                          filterUnits="objectBoundingBox"
                          id="dropshadow-1"
                        >
                          <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
                          <feGaussianBlur
                            stdDeviation="24"
                            in="shadowOffsetOuter"
                            result="shadowBlurOuter"
                          />
                          <feColorMatrix
                            values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
                            in="shadowBlurOuter"
                          />
                        </filter>
                      </defs>
                      <path fill="#F6F8FA" d="M0 220V0h200zM480 140v220H280z" />
                      <path
                        fill="#FFF"
                        d="M40 50h400v260H40z"
                        style={this.styleProps.dropboxStyle(1)}
                      />
                      <path fill="#FFF" d="M40 50h400v260H40z" />
                      <path
                        fill="#FFF"
                        d="M103 176h80v160h-80zM320 24h88v88h-88z"
                        style={this.styleProps.dropboxStyle(1)}
                      />
                      <path fill="#FFF" d="M103 176h80v160h-80zM320 24h88v88h-88z" />
                      <path
                        fill="#FFF"
                        d="M230.97 198l16.971 16.971-16.97 16.97L214 214.972z"
                        style={this.styleProps.dropboxStyle(1)}
                      />
                      <path fill="#02C6A4" d="M230.97 198l16.971 16.971-16.97 16.97L214 214.972z" />
                      <path
                        fill="#FFF"
                        d="M203 121H103v100z"
                        style={this.styleProps.dropboxStyle(1)}
                      />
                      <path fill="#84E482" d="M203 121H103v100z" />
                      <circle
                        fill="#FFF"
                        cx="288"
                        cy="166"
                        r="32"
                        style={this.styleProps.dropboxStyle(1)}
                      />
                      <circle
                        fill="#0EB3CE"
                        cx="288"
                        cy="166"
                        r="32"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </svg>
                  </div>
                  <div className={classes('feature-extended-body')}>
                    <h3 className={classes('mt-0')}>Access to Industry Leading Rates</h3>
                    <p>Save money, by gaining access to industry leading LTL rates. </p>
                  </div>
                </div>
                <div className={classes('feature-extended')}>
                  <div className={classes('feature-extended-image is-revealing')}>
                    <svg
                      width="480"
                      height="360"
                      viewBox="0 0 480 360"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter
                          x="-500%"
                          y="-500%"
                          width="1000%"
                          height="1000%"
                          filterUnits="objectBoundingBox"
                          id="dropshadow-2"
                        >
                          <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
                          <feGaussianBlur
                            stdDeviation="24"
                            in="shadowOffsetOuter"
                            result="shadowBlurOuter"
                          />
                          <feColorMatrix
                            values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
                            in="shadowBlurOuter"
                          />
                        </filter>
                      </defs>
                      <path fill="#F6F8FA" d="M480 140v220H280zM0 220V0h200z" />
                      <path
                        fill="#FFF"
                        d="M40 50h400v260H40z"
                        style={this.styleProps.dropboxStyle(2)}
                      />
                      <path fill="#FFF" d="M40 50h400v260H40z" />
                      <path
                        fill="#FFF"
                        d="M86.225 161l62.226 62.225-62.226 62.225L24 223.225zM296 176h80v160h-80z"
                        style={this.styleProps.dropboxStyle(2)}
                      />
                      <path
                        fill="#FFF"
                        d="M86.225 161l62.226 62.225-62.226 62.225L24 223.225zM296 176h80v160h-80z"
                      />
                      <path
                        fill="#FFF"
                        d="M245.092 218l9.378 22.092-22.093 9.378L223 227.378z"
                        style={this.styleProps.dropboxStyle(2)}
                      />
                      <path
                        fill="#02C6A4"
                        d="M245.092 218l9.378 22.092-22.093 9.378L223 227.378z"
                      />
                      <path
                        fill="#FFF"
                        d="M270 96H170v100z"
                        style={this.styleProps.dropboxStyle(2)}
                      />
                      <path fill="#84E482" d="M270 96H170v100z" />
                      <circle
                        fill="#FFF"
                        cx="296"
                        cy="177"
                        r="32"
                        style={this.styleProps.dropboxStyle(2)}
                      />
                      <circle
                        fill="#0EB3CE"
                        cx="296"
                        cy="177"
                        r="32"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </svg>
                  </div>
                  <div className={classes('feature-extended-body')}>
                    <h3 className={classes('mt-0')}>Import your tariffs</h3>
                    <p>Compare your rates to our tariffs. Full Truckload and LTL </p>
                  </div>
                </div>
                <div className={classes('feature-extended')}>
                  <div className={classes('feature-extended-image is-revealing')}>
                    <svg
                      width="480"
                      height="360"
                      viewBox="0 0 480 360"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter
                          x="-500%"
                          y="-500%"
                          width="1000%"
                          height="1000%"
                          filterUnits="objectBoundingBox"
                          id="dropshadow-3"
                        >
                          <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
                          <feGaussianBlur
                            stdDeviation="24"
                            in="shadowOffsetOuter"
                            result="shadowBlurOuter"
                          />
                          <feColorMatrix
                            values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
                            in="shadowBlurOuter"
                          />
                        </filter>
                      </defs>
                      <path fill="#F6F8FA" d="M480 140v220H280zM0 220V0h200z" />
                      <path
                        fill="#FFF"
                        d="M40 50h400v260H40z"
                        style={this.styleProps.dropboxStyle(3)}
                      />
                      <path fill="#FFF" d="M40 50h400v260H40z" />
                      <path
                        fill="#FFF"
                        d="M72 248h88v88H72zM180 24h80v160h-80z"
                        style={this.styleProps.dropboxStyle(3)}
                      />
                      <path fill="#FFF" d="M72 248h88v88H72zM180 24h80v160h-80z" />
                      <path
                        fill="#FFF"
                        d="M277.664 261.919l-18.113 15.745-15.746-18.113 18.113-15.745z"
                        style={this.styleProps.dropboxStyle(3)}
                      />
                      <path
                        fill="#02C6A4"
                        d="M277.664 261.919l-18.113 15.745-15.746-18.113 18.113-15.745z"
                      />
                      <path
                        fill="#FFF"
                        d="M315 129H215v100z"
                        style={this.styleProps.dropboxStyle(3)}
                      />
                      <path fill="#84E482" d="M315 129H215v100z" />
                      <circle
                        fill="#FFF"
                        cx="318"
                        cy="219"
                        r="32"
                        style={this.styleProps.dropboxStyle(3)}
                      />
                      <circle
                        fill="#0EB3CE"
                        cx="318"
                        cy="219"
                        r="32"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </svg>
                  </div>
                  <div className={classes('feature-extended-body')}>
                    <h3 className={classes('mt-0')}>Tracking and shipping documents</h3>
                    <p>OTIF OSCA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={classes('features section text-center')}>
            <div className={classes('container')}>
              <div className={classes('features-inner section-inner has-top-divider')}>
                <h2 className={classes('section-title mt-0')}>Product features</h2>
                <div className={classes('features-wrap')}>
                  <div className={classes('feature is-revealing')}>
                    <div className={classes('feature-inner')}>
                      <div className={classes('feature-icon')}>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <path fill="#84E482" d="M48 16v32H16z" />
                            <path fill="#0EB3CE" d="M0 0h32v32H0z" />
                          </g>
                        </svg>
                      </div>
                      <h4 className={classes('feature-title h3-mobile')}>Automated</h4>
                      <p className={classes('text-sm')}>
                        Tracking, Dispatching, Shipping documents,
                      </p>
                    </div>
                  </div>
                  <div className={classes('feature is-revealing')}>
                    <div className={classes('feature-inner')}>
                      <div className={classes('feature-icon')}>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <path fill="#84E482" d="M48 16v32H16z" />
                            <path fill="#0EB3CE" d="M0 0v32h32z" />
                            <circle fill="#02C6A4" cx="29" cy="9" r="4" />
                          </g>
                        </svg>
                      </div>
                      <h4 className={classes('feature-title h3-mobile')}>Built for Scale</h4>
                      <p className={classes('text-sm')}>
                        {' '}
                        manage thousands of shipments with hundreds of reps in one go.{' '}
                      </p>
                    </div>
                  </div>
                  <div className={classes('feature is-revealing')}>
                    <div className={classes('feature-inner')}>
                      <div className={classes('feature-icon')}>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <path fill="#0EB3CE" d="M0 0h32v32H0z" />
                            <path fill="#84E482" d="M16 16h32L16 48z" />
                          </g>
                        </svg>
                      </div>
                      <h4 className={classes('feature-title h3-mobile')}>Enterprise Ready</h4>
                      <p className={classes('text-sm')}>
                        Lots of access controls and reports to understand your business
                      </p>
                    </div>
                  </div>
                  <div className={classes('feature is-revealing')}>
                    <div className={classes('feature-inner')}>
                      <div className={classes('feature-icon')}>
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <path
                              d="M32 40H0c0-8.837 7.163-16 16-16s16 7.163 16 16z"
                              fill="#84E482"
                              style={{ mixBlendMode: 'multiply' }}
                            />
                            <path fill="#03C5A4" d="M12 8h8v8h-8z" />
                            <path fill="#0EB3CE" d="M32 0h16v48H32z" />
                          </g>
                        </svg>
                      </div>
                      <h4 className={classes('feature-title h3-mobile')}>Shipping Notifications</h4>
                      <p className={classes('text-sm')}>To stay n top of your freight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={classes('pricing section')}>
            <div className={classes('container')}>
              <div className={classes('pricing-inner section-inner has-top-divider')}>
                <h2 className={classes('section-title mt-0 text-center')}>Pricing</h2>
                <div className={classes('pricing-tables-wrap')}>
                  <div className={classes('pricing-table is-revealing')}>
                    <div className={classes('pricing-table-inner')}>
                      <div className={classes('pricing-table-main')}>
                        <div className={classes('pricing-table-header')}>
                          <div
                            className={classes('pricing-table-title mt-12 mb-16 text-secondary')}
                          >
                            Lorem ipsum
                          </div>
                          <div className={classes('pricing-table-price mb-24 pb-32')}>
                            <span className={classes('pricing-table-price-currency h3')}>$</span>
                            <span className={classes('pricing-table-price-amount h1')}>29</span>
                          </div>
                        </div>
                        <ul className={classes('pricing-table-features list-reset text-xs mb-56')}>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00C6A7"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00C6A7"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00C6A7"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                        </ul>
                      </div>
                      <div className={classes('pricing-table-cta')}>
                        <a className={classes('button button-secondary button-block')} href="#">
                          Get started now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes('pricing-table is-revealing')}>
                    <div className={classes('pricing-table-inner')}>
                      <div className={classes('pricing-table-main')}>
                        <div className={classes('pricing-table-header')}>
                          <div className={classes('pricing-table-title mt-12 mb-16 text-primary')}>
                            Lorem ipsum
                          </div>
                          <div className={classes('pricing-table-price mb-24 pb-32')}>
                            <span className={classes('pricing-table-price-currency h3')}>$</span>
                            <span className={classes('pricing-table-price-amount h1')}>129</span>
                          </div>
                        </div>
                        <ul className={classes('pricing-table-features list-reset text-xs mb-56')}>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00A2B8"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00A2B8"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00A2B8"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                          <li>
                            <span className={classes('list-icon')}>
                              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                                  fill="#00A2B8"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </span>
                            <span>Sed do eiusmod tempor cesa.</span>
                          </li>
                        </ul>
                      </div>
                      <div className={classes('pricing-table-cta')}>
                        <a className={classes('button button-primary button-block')} href="#">
                          Get started now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={classes('site-footer')}>
          <div className={classes('container')}>
            <div className={classes('site-footer-inner')}>
              <div className={classes('brand footer-brand')}>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Evelyn</title>
                    <defs>
                      <radialGradient cy="0%" fx="50%" fy="0%" r="100%" id="logo-gradient-footer">
                        <stop stopColor="#00A2B8" offset="0%" />
                        <stop stopColor="#00F9D2" offset="100%" />
                      </radialGradient>
                    </defs>
                    <path
                      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      fill="url(#logo-gradient-footer)"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <ul className={classes('footer-links list-reset')}>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
              <ul className={classes('footer-social-links list-reset')}>
                <li>
                  <a href="#">
                    <span className={classes('screen-reader-text')}>Facebook</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                        fill="#0EB3CE"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className={classes('screen-reader-text')}>Twitter</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                        fill="#0EB3CE"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className={classes('screen-reader-text')}>Google</span>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        fill="#0EB3CE"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className={classes('footer-copyright')}>
                &copy; 2018 Evelyn, all rights reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Index;

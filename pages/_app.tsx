import 'isomorphic-fetch';
import * as React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import { getStore } from '../src/store';

// Fixes loading CSS bug https://github.com/zeit/next.js/issues/5203#issuecomment-423403716
import '../src/styles/miranda-styles/style.module.scss';
import '../src/styles/controltower-styles/style.module.scss';

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req;
    const store = getStore(undefined, server);
    const state = store.getState();
    const out = { state, server } as any;

    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...(await Component.getInitialProps(ctx))
        }
      };
    }

    return out;
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

    function revealAnimations() {
      sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 150
      });

      sr.reveal('.feature, .pricing-table', {
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'bottom',
        viewFactor: 0.5
      });

      sr.reveal('.feature-extended-image', {
        duration: 600,
        scale: 0.9,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        viewFactor: 0.5
      });
    }

    window.addEventListener('load', function() {
      body.classList.add('is-loaded');
    });

    if (body.classList.contains('has-animations')) {
      window.addEventListener('load', revealAnimations);
    }
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;

    return (
      <Container>
        <Provider store={getStore(undefined, props.server)}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

import { Fragment } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/global.css'
import Layout from '../components/nav/layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P19W527YQ5" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-P19W527YQ5');
            `}
          </Script>
      <Head>
        <title>Deketmet</title>
        <link rel='icon' type='svg' href='/icon.svg' />
        <meta name='description'
          content='Deketmet is a software development company
          that offer services in Web development, Graphic Designing,
          and Marketing We help our clients to set up and grow online
          businesses and apps.'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp

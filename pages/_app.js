import React, { useEffect } from 'react';
import '../styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import FacebookPixel from '../components/common/facebook/FacebookPixel';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <>
    <Component {...pageProps} />
    <FacebookPixel/>
  </>
}

export default MyApp

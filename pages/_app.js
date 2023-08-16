import React, { useEffect } from 'react';
import '../styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import FacebookPixel from '../components/common/facebook/FacebookPixel';
import Google from '../components/common/google/Google';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <>
    <Component {...pageProps} />
    <FacebookPixel />
  </>
}

export default MyApp

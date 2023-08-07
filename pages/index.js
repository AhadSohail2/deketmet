import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/common/Nav/Nav'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Footer from '../components/common/Footer/Footer'
import Contact from '../components/common/Contact/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deketmet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

import React from 'react'
import Head from 'next/head'
import Nav from '../components/common/Nav/Nav'
import Hero from '../components/service/Hero'
import TechStack from '../components/service/TechStack'
import Pwf from '../components/service/Pwf'
import About from '../components/service/About'
import Industries from '../components/service/Industries'
import Portfolio from '../components/service/Portfolio'
import Contact from '../components/common/Contact/Contact'
import Footer from '../components/common/Footer/Footer'

function Services() {
    return (
        <div>
            <Head>
                <title>Deketmet-Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Nav />
            <Hero />
            <TechStack />
            <Pwf />
            <About />
            <Industries />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Services
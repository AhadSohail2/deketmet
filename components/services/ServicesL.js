import React from 'react'
import ServicesContainer from './Services';
import ServicesHead from './ServicesHead';
import styles from './services.module.css';
function Services() {

    const ServicesData = [
        {
            _id:1,
            title: "Graphic Designing",
            description: "Design is the king of any product. Good design is very important to get full clients attention. We will design your graphics according to your product. We can design Websites, Logo, Posts, Illustrations, Emails, and Banners.",
            color: "light"
        },
        {
            _id:2,
            title: "Web Development",
            description: "We will use the MERN stack to develop your website and deploy it. We will develop a speed-optimized, fully responsive, pixel-perfect website with clean code and comments. Contact Us For More Details.",
            color: "dark"
        },
        {
            _id:3,
            title: "Digital Marketing",
            description: "Content is fire. Social media is gasoline. Everyone needs marketing to grow his/her business. From business strategy planning to implementation, we will take care of everything. We will use Facebook, Instagram, Youtube, Google, and LinkedIn for marketing.",
            color: "dark"
        },
        {
            _id:4,
            title: "SEO",
            description: "SEO is another way to get traffic to your website. We are also providing services in SEO. We will get traffic to your website through SEO. We will use high-quality backlinks and the best keywords to get traffic. We will rank your website on the best traffic keywords on the first page of Google.",
            color: "light"
        }
    ]

    return (
        <section id='services' className={`container ${styles.servicesContainer} `}>
            <ServicesHead />
            <ServicesContainer services={ServicesData} />
        </section>
    )
}

export default Services;
import React from 'react'
//Components Import
// import PortCategory from './portFolioCategory';
import HeadPortfolio from './portfolioHead';
import PortItems from './portItems';
//Styles
import styles from './portfolio.module.css';

function Portfolio() {
    const PortfolioItems = [
        {
            id: 1,
            title: "Web Development",
            category: "Development",
            image:'projectOne.png',
            size:2
        },
        {
            id: 2,
            title: "Web Designing and Development",
            category: "Design",
            image:'projectThree.png',
            size:1
        },
        {
            id: 3,
            title: "Web Designing",
            category: "Design",
            image:'projectTwo.png',
            size:1
        },
        {
            id: 4,
            title: "Web Development",
            category: "Development",
            image:'projectFour.png',
            size:2
        }
    ]
    return (
        <section id='portfolio' className={`container ${styles.portfolioContainer}`}>
            <HeadPortfolio />
            {/* <PortCategory /> */}
            <PortItems items={PortfolioItems} />
        </section>
    )
}

export default Portfolio;
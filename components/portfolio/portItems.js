import React from 'react'
import PortItem from './portFolioItem'
//images
import Project1 from '../../projects/ProjectOne.png'
import Project2 from '../../projects/ProjectTwo.png'
import Project3 from '../../projects/ProjectThree.png'
import Project4 from '../../projects/ProjectFour.png'
//style
import styles from './portfolioItems.module.css'
function PortItems(props) {
  const { items } = props;
  return (
    <div className={styles.itemsContainer}>
      <PortItem
        key={items[0].id}
        title={items[0].title}
        category={items[0].category}
        image={Project1}
        size={items[0].size}
      />
      <PortItem
        key={items[1].id}
        title={items[1].title}
        category={items[1].category}
        image={Project2}
        size={items[1].size}
      />
      <PortItem
        key={items[2].id}
        title={items[2].title}
        category={items[2].category}
        image={Project3}
        size={items[2].size}
      />
      <PortItem
        key={items[3].id}
        title={items[3].title}
        category={items[3].category}
        image={Project4}
        size={items[3].size}
      />
    </div>
  )
}

export default PortItems
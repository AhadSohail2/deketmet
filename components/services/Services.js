import React from 'react'
import Service from './Service';
import styles from './serviceContainer.module.css';


function ServicesContainer(props) {
    const { services } = props;
    return (
        <div className={styles.servicesContainer}>
            {services.map((data) => {
                return <Service
                    key={data._id}
                    title={data.title}
                    content={data.description}
                    color={data.color}
                />

            })}
        </div>
    )
}

export default ServicesContainer
import React from 'react';
import styles from './success.module.css';
function AboutSuccess(props) {
  return (
    <div data-aos={props.aos} className={styles.success}>
      <div className={styles.successInfo}>
        <span>20</span>
        <div>Projects Completed</div>
      </div>
      <div className={styles.successInfo}>
        <span className={styles.projects}>2</span>
        <div>Years Of Success</div>
      </div>
    </div>
  )
}

export default AboutSuccess;
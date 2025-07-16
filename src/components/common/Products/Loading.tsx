import React from 'react'
import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.card}>
        <div className={styles.imgWrapper}>
            <div className={styles.imgFrame}></div>
        </div>
            <div className={styles.headingFrame}></div>
        <div className={styles.textWrapper}>
            <div className={styles.textBar}></div>
            <div className={styles.textBar}></div>
            <div className={styles.textBar}></div>
        </div>
        <div className={styles.btnWrapper}>
            <div className={styles.btnLeft}></div>
            <div className={styles.btnRight}></div>
        </div>
    </div>
  )
}

export default Loading
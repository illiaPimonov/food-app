import React from 'react'
import styles from './main.module.css'
import MainCategories from '@/components/common/MainCategories/MainCategories'
import Filter from '@/components/common/Filter/Filter'

const Main = () => {
  return (
    <div className={styles.wrapper}>
        <MainCategories/>
        <div className={styles.smWrapper}>
            <Filter/>
            <div className={styles.test}>fdvdf</div>
        </div>
    </div>
  )
}

export default Main
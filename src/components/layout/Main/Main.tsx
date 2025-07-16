import React from 'react'
import styles from './main.module.css'
import MainCategories from '@/components/common/MainCategories/MainCategories'
import Filter from '@/components/common/Filter/Filter'
import Products from '@/components/common/Products/Products'

const Main = () => {
  return (
    <div className={styles.wrapper}>
        <MainCategories/>
        <div className={styles.smWrapper}>
            <Filter/>
            <Products/>
        </div>
    </div>
  )
}

export default Main
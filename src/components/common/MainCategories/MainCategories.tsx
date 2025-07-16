import React from 'react'
import styles from './mainCategories.module.css'
import Categories from '../Categories/Categories'
import Sorting from '../Sorting/Sorting'

const MainCategories = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.controlWrapper}>
            <p className={`${'t-lg'}`}>Все пиццы</p>
            <div className={styles.mainSmWrapper}>
                <Categories/>
                <Sorting/>
            </div>
        </div>
    </div>
  )
}

export default MainCategories
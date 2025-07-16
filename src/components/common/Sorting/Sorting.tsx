import React from 'react'
import styles from './sorting.module.css'
import SortSVG from '@/components/ui/Icons/Sort/SortSVG'

const Sorting = () => {
  return (
    <div className={styles.container}>
        <SortSVG/>
        <p>Сортировка: рейтингу</p>
        </div>
  )
}

export default Sorting
import React from 'react'
import styles from './filter.module.css'
import Customizable from '../Customizable/Customizable'
import Price from '../Price/Price'
import Ingredients from '../Ingredients/Ingredients'
import Dough from '../Dough/Dough'
import Button from '@/components/ui/Button/Button'

const Filter = () => {
  return (
    <div className={styles.container}>
        <p className={`t-lg-22`}>Фильтрация</p>
        <Customizable/>
        <Price/>
        <Ingredients/>
        <Dough/>
        <div className={styles.filterBtn}>
          <Button variant={'classic'} height={50} width={244} >Применить</Button>
        </div>
    </div>
  )
}

export default Filter
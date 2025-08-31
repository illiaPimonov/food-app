import React from 'react'
import styles from './ingredients.module.css'
import Checkbox from '@/components/ui/Checkbox/Checkbox'

const Ingredients = () => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor='' className={`t-lg-16`}>Ингредиенты:</label>
        <Checkbox content={'Сырный соус'}/>
        <Checkbox content={'Моцарелла'}/>
        <Checkbox content={'Чеснок'}/>
        <Checkbox content={'Солённые огурчики'}/>
        <Checkbox content={'Красный лук'}/>
        <Checkbox content={'Томаты'}/>
        <p>+ Показать всё</p>
    </div>
  )
}

export default Ingredients
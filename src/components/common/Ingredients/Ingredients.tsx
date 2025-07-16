import React from 'react'
import styles from './ingredients.module.css'

const Ingredients = () => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor='' className={`t-lg-16`}>Ингредиенты:</label>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Сырный соус</label>
        </div>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Моцарелла</label>
        </div>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Чеснок</label>
        </div>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Солённые огурчики</label>
        </div>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Красный лук</label>
        </div>
        <div>
            <input type="checkbox" />
            <label htmlFor="">Томаты</label>
        </div>
        <p>+ Показать всё</p>
    </div>
  )
}

export default Ingredients
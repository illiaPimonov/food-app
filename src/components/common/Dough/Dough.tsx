import React from 'react'
import styles from './dough.module.css'

const Dough = () => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor="" className={`t-lg-16`}>Тип теста:</label>
        <div>
            <div>
                <input type="radio" />
                <label htmlFor="">Традиционное</label>
            </div>
            <div>
                <input type="radio" />
                <label htmlFor="">Тонкое</label>
            </div>
        </div>
    </div>
  )
}

export default Dough
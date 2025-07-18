import React from 'react'
import styles from './dough.module.css'
import Radio from '@/components/ui/Radio/Radio'

const Dough = () => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor="" className={`t-lg-16`}>Тип теста:</label>
        <div className={styles.container}>
            <div>
              <Radio content={'Традиционное'} />
            </div>
            <div>
              <Radio content={'Тонкое'} />
            </div>
        </div>
    </div>
  )
}

export default Dough
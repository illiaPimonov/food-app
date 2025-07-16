"use client"
import React from 'react'
import styles from './price.module.css'
import Input from '@/components/ui/Input/Input'

const Price = () => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor='from' className={`t-lg-16`}>Цена от и до:</label>
        <div className={styles.container}>
            <div>
              <Input variant={'s'} type='text'></Input>
            </div>
            <Input variant={'s'} type='text'></Input>
        </div>
    </div>
  )
}

export default Price
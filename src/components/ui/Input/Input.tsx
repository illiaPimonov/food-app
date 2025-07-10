import React from 'react'
import styles from './input.module.css'

const Input = () => {
  return (
    <input type='text' placeholder='Search pizza...' className={`${styles.input} ${styles.lg}`}/>
  )
}

export default Input
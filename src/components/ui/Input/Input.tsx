import React, { FC } from 'react'
import styles from './input.module.css'

type InputProps = {
  variant: 's' | 'lg'
  placeholder?: string
  type:string
  icon?: React.ReactNode
}

const Input:FC<InputProps> = ({variant, placeholder, type, icon}) => {
  return (
    <label htmlFor="" className={styles.wrapper}>
      <input type={type} placeholder={placeholder} className={`${styles.input} ${styles[variant]}`}/>
      {icon && <span className={styles.icon}>{icon}</span>}
    </label>
  )
}

export default Input
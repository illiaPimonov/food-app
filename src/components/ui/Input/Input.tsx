import React, { FC } from 'react'
import styles from './input.module.css'

type InputProps = {
  variant: 's' | 'lg'
  placeholder?: string
  type:string
}

const Input:FC<InputProps> = ({variant, placeholder, type}) => {
  return (
    <input type={type} placeholder={placeholder} className={`${styles.input} ${styles[variant]}`}/>
  )
}

export default Input
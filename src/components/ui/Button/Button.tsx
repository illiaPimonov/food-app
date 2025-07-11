import React, { FC, ReactNode } from 'react'
import styles from './button.module.css'

type BtnProps = {
  variant:'small' | 'medium' | 'large'
  children?: ReactNode
}


const Button:FC<BtnProps> = ({variant, children}) => {
  return (
    <button className={styles[variant]}>{children}</button>
  )
}

export default Button
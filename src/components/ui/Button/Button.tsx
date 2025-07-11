import React, { FC, ReactNode } from 'react'
import styles from './button.module.css'

type BtnProps = {
  variant:'active' | 'classic' | 'static'
  height: number
  width:number
  children?: ReactNode
  gap?:number
}


const Button:FC<BtnProps> = ({variant, width, height, gap, children}) => {
  return (
    <button className={styles[variant]} style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}>{children}</button>
  )
}

export default Button
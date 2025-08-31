import React, { FC, ReactNode } from 'react'
import styles from './button.module.css'

type BtnProps = {
  variant:'active' | 'classic' | 'static' | 'card' | 'inactive'
  height: number
  width:number
  children?: ReactNode
  gap?:number
  handlerFunction?: () => void
}


const Button:FC<BtnProps> = ({variant, width, height, gap, children, handlerFunction}) => {
  return (
    <button className={styles[variant]} onClick={handlerFunction} style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}>{children}</button>
  )
}

export default Button
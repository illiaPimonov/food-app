import React, { FC } from 'react'

type BtnProps = {
  name:string
}


const Button:FC<BtnProps> = ({name}) => {
  return (
    <button>Button {name}</button>
  )
}

export default Button
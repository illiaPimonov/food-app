import React from 'react'
import styles from "./categories.module.css"
import Button from '@/components/ui/Button/Button'
import ArrowBottomSVG from '@/components/ui/Icons/ArrowBottomSVG/ArrowBottomSVG'

const Categories = () => {
  return (
    <div className={styles.container}>
      <Button variant='static' width={77} height={43}>Все</Button>
      <Button variant='inactive' width={93} height={42}>Мясные</Button>
      <Button variant='inactive' width={90} height={42}>Острые</Button>
      <Button variant='inactive' width={97} height={42}>Сладкие</Button>
      <Button variant='inactive' width={155} height={42}>Вегетарианские</Button>
      <Button variant='inactive' width={111} height={42}>С курицей</Button>
      <Button variant='inactive' width={64} height={42} gap={7}>Ещё <ArrowBottomSVG/></Button>
    </div>
  )
}

export default Categories
import React from 'react'
import styles from "./categories.module.css"
import Button from '@/components/ui/Button/Button'

const Categories = () => {
  return (
    <div className={styles.container}>
      <Button variant='static' width={77} height={43}>Все</Button>
      <Button variant='static' width={93} height={42}>Мясные</Button>
      <Button variant='static' width={90} height={42}>Острые</Button>
      <Button variant='static' width={97} height={42}>Сладкие</Button>
      <Button variant='static' width={155} height={42}>Вегетарианские</Button>
      <Button variant='static' width={111} height={42}>С курицей</Button>
      <Button variant='static' width={64} height={42}>Ещё</Button>
    </div>
  )
}

export default Categories
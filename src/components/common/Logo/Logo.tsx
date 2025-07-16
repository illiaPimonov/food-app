import PizzaSVG from '@/components/ui/Icons/PizzaSVG/PizzaSVG'
import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <PizzaSVG/>
            </div>
            <div className={styles.logoTextContainer}>
                <p className={`${'t-xlg'} ${styles.upperText}`}>NEXT PIZZA</p>
                <p className={`${'t-md'} ${styles.logoLowerText}`}>вкусней уже некуда</p>
            </div>
    </div>
  )
}

export default Logo
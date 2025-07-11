import React from 'react'
import Button from '../../ui/Button/Button'
import styles from './profileControl.module.css'
import CartSVG from '@/components/ui/Icons/CartSVG/CartSVG'
import UserSVG from '@/components/ui/Icons/UserSVG/UserSVG'

const ProfileControl = () => {
  return (
    <div className={styles.wrapper}>
        <Button variant='large'>
          <UserSVG/>
          <p>Войти</p>
        </Button>
        <Button variant='medium'>
          <CartSVG/>
        </Button>
    </div>
  )
}

export default ProfileControl
import React from 'react'
import Button from '../../ui/Button/Button'
import styles from './profileControl.module.css'
import CartSVG from '@/components/ui/Icons/CartSVG/CartSVG'
import UserSVG from '@/components/ui/Icons/UserSVG/UserSVG'
import Link from 'next/link'

const ProfileControl = () => {
  return (
    <div className={styles.wrapper}>
        <Button variant='active' width={110} height={50} gap={6}>
          <UserSVG/>
          <p>Войти</p>
        </Button>
        <Link href={'/cart'}> 
          <Button variant='active' width={50} height={50}>
            <CartSVG/>
          </Button>
        </Link>
    </div>
  )
}

export default ProfileControl
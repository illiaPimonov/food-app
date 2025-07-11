import React from 'react'
import Button from '../../ui/Button'
import styles from './profileControl.module.css'

const ProfileControl = () => {
  return (
    <div className={styles.wrapper}>
        <Button name='Ilya'/>
        <Button name='Ivan'/>
    </div>
  )
}

export default ProfileControl
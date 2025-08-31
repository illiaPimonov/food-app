"use client"
import React from 'react'
import styles from './customizable.module.css'
import Checkbox from '@/components/ui/Checkbox/Checkbox'

const Customizable = () => {

    return (
        <div className={styles.wrapper}>
            <Checkbox content={'Можно собирать'}/>
            <Checkbox content={'Новинки'}/>
        </div>
    )
}

export default Customizable

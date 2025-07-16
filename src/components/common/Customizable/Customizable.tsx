"use client"
import React from 'react'
import styles from './customizable.module.css'

const Customizable = () => {

    return (
        <div className={styles.wrapper}>
            <div>
                <input
                    type="checkbox"
                    id="customizable"
                    name="customizable"
                />
                <label htmlFor="customizable" className={`t-md-16`}>Можно собирать</label>
            </div>
            <div>
                <input type="checkbox" id="new" name="new" />
                <label htmlFor="new" className={`t-md-16`}>Новинки</label>
            </div>
        </div>
    )
}

export default Customizable

import React, {FC} from 'react'
import styles from './radio.module.css'

type RadioProps = {
    content:string
}

const Radio:FC<RadioProps> = ({content}) => {

    return (
    <label className={styles.customRadio}>
        <input type="radio" name="option" value="1" />
        <span className={styles.radioMark}></span>
        {content}
    </label>
  )
}

export default Radio
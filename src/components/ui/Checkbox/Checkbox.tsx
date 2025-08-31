import React, {FC} from 'react'
import styles from './checkbox.module.css'
import CheckmarkSVG from '../Icons/CheckmarkSVG/CheckmarkSVG'

type CheckboxProps  = {
    content:string
}

const Checkbox:FC<CheckboxProps> = ({content}) => {
  return (
    <label className={styles.container}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.checkmark}>
            <CheckmarkSVG className={styles.icon}/>
        </span>
        {content}
    </label>
  )
}

export default Checkbox
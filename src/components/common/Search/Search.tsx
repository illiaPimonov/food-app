import React from 'react'
import styles from './search.module.css'
import Input from '@/components/ui/Input/Input'
import SearchSVG from '@/components/ui/Icons/SearchSVG/SearchSVG'
const Search = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <SearchSVG/>
            </div>
        <Input/>
    </div>
  )
}

export default Search
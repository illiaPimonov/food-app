import React from 'react'
import styles from './header.module.css'
import ProfileControl from '../../common/ProfileControl/ProfileControl'
import Search from '../../common/Search/Search'
import Logo from '../../common/Logo/Logo'

const Header = () =>{
  return (
    <header className={styles.header}>
      <Logo/>
      <Search></Search>
      <ProfileControl/>
    </header>
  )
}

export default Header
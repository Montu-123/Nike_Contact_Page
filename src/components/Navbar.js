import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.container}> 
    
        <div className='nav'>
            <img src='/logo.svg' className='logo'></img>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </div>

    </header>
  )
}

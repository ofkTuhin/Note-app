import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <>
           <nav className={styles.nav}>
               <div className={styles.list}>  <Link href="/" passHref><h3>Note</h3></Link></div>
               <ul>
                  
                   <Link href="/new" passHref><li className={styles.list}>create note</li></Link>
               </ul>
               </nav> 
        </>
    )
}

export default Navbar

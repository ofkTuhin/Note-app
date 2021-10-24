import React from 'react'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

function Navbar() {
    const router=useRouter()
    return (
        <>
           <nav className={styles.nav}>
               <div className={styles.list}>  <h3 onClick={() => router.push('/')}> Note </h3></div>
               <ul>
                   <li className={styles.list}  onClick={() => router.push('/new')}>create note</li>
               </ul>
               </nav> 
        </>
    )
}

export default Navbar

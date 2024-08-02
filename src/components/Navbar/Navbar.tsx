'use client'

import Link from "next/link"
import { useState } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <h1><Link href="/" className={styles.navbarTitle}>WebChess</Link></h1>
      <button className={styles.navbarToggler} onClick={toggleNavbar}>☰</button>
      <ul className={`${styles.navbarNav} ${styles.navbarCollapse} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link href="/play" className={styles.navItemLink}>Play</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/puzzles" className={styles.navItemLink}>Puzzles</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/learn" className={styles.navItemLink}>Learn</Link>
        </li >
        <li className={styles.navItem}>
          <Link href="/broadcast" className={styles.navItemLink}>Broadcast</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog" className={styles.navItemLink}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
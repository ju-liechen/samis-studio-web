import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import styles from './hamburger-menu.module.scss'
import { HeaderButton } from 'components/header-button';

export const HamburgerMenu = ({ }) => {
  const router = useRouter()
  const currentPage = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {isMenuOpen && (
        <motion.div
        key="menuBar"
        variants={menuBarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className={styles.menuBar}>
            <HeaderButton
              text="PRODUCTS"
              isBold={true}
              destination="/products"
              currentPage={currentPage}
              onClick={() => router.push('/products')}
            />
            <HeaderButton
              text="COMMISSIONS"
              isBold={true}
              destination="/commissions"
              currentPage={currentPage}
              onClick={() => router.push('/commissions')}
            />
            <HeaderButton
              text="ABOUT"
              isBold={true}
              destination="/about"
              currentPage={currentPage}
              onClick={() => router.push('/about')}
            />
            <HeaderButton
              text="FAQ"
              isBold={true}
              destination="/faq"
              currentPage={currentPage}
              onClick={() => router.push('/faq')}
              />
            <button className={styles.closeButton} onClick={toggleMenu}><p>Close</p></button>
            <div className={styles.spacer}></div>
            <p style={{ color: 'grey', fontStyle: 'italic', fontSize: '10px', padding: '10px' }}>julie@inputlogic.ca</p>
        </motion.div>
      )}
    </div>
  )
}
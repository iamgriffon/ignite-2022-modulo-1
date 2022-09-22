import styles from '../styles/Header.module.css'
import igniteLogo from '../../public/logo.svg'
import Image from 'next/image'

export function Header(){
  return (
    <h1 className={styles.header}>
        <Image src={igniteLogo} height='2rem' />
      <strong>Ignite Feed</strong>
    </h1>
  )
}
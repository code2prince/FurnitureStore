import styles from './Footer.js'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Footer</h3>
        <div>Furniture Store </div>
        <ul>
            <li>About</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>Product</li>
        </ul>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}

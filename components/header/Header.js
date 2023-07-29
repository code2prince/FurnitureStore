import styles from './Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import { FcHome } from 'react-icons/fc';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <div>
          <img className={styles.logo} src="/logofurniture2.jpg" alt="img"/>
        </div>

        <div><h3>A to Z Stores</h3></div>
      </div>


      <div className={styles.search_box}>
        <input className={styles.searchInput} type='text' placeholder='Search items'></input>
        <span className={styles.searchIcon}><FaSearch /></span>
        <button type='button' className={styles.btn}>Search</button>
      </div>

      <div className={styles.cart_icons}>
        <div className={styles.menuItem}><a><FcHome /> Home</a></div>
        <div className={styles.menuItem}><a><CgProfile />Product</a></div>
        <div className={styles.menuItem}><a><CgProfile />Profile</a></div>
        <div className={styles.menuItem}><a><AiOutlineShoppingCart />Cart</a></div>
      </div>
    
    </div>
  )

}

import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useRef, useState } from 'react';
import underline from '../../assets/nav_underline.svg';

function Navbar() {
  const [menu, setMenu] = useState('');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-35rem';
  };

  return (
    <div className={styles.navbar}>
      {/* <img src={logo} alt="Portfolio Logo" /> */}
      <Link to={'/'} className={styles.logo}>
        Welcome
      </Link>
      <img
        src={menu_open}
        alt="Menu Image"
        className={styles['nav-mob-open']}
        onClick={openMenu}
      />
      <ul ref={menuRef} className={styles['nav-menu']}>
        <img
          src={menu_close}
          alt="Menu Close"
          className={styles['nav-mob-close']}
          onClick={closeMenu}
        />
        <li>
          <p onClick={() => setMenu('home')}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </p>
          {menu === 'home' ? (
            <img src={underline} alt="Underline Image" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu('about')}>
            <Link className={styles.link} to="/about">
              About me
            </Link>
          </p>
          {menu === 'about' ? (
            <img src={underline} alt="Underline Image" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu('services')}>
            <Link className={styles.link} to="/services">
              Services
            </Link>
          </p>
          {menu === 'services' ? (
            <img src={underline} alt="Underline Image" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu('projects')}>
            <Link className={styles.link} to="projects">
              Projects
            </Link>
          </p>
          {menu === 'projects' ? (
            <img src={underline} alt="Underline Image" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu('contact')}>
            <Link className={styles.link} to="contact">
              Contact
            </Link>
          </p>
          {menu === 'contact' ? (
            <img src={underline} alt="Underline Image" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <p onClick={() => setMenu('contact')}>
        <Link className={styles['nav-connect']} to="/contact">
          Connect with me
        </Link>
      </p>
    </div>
  );
}

export default Navbar;

import styles from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';



const NavbarItem = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png"
        alt="Logo React Movies"
        className={styles.logo}
        />
      <h1 className={styles.title}>React Movies</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/">Início</Link></li>
        <li className={styles.navItem}><Link to="/header">Favoritos</Link></li>
      </ul>
      
    </nav>
  );
};

export default NavbarItem;
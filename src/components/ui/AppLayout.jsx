import styles from './AppLayout.module.css';
import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import styles from '@/styles/NavBar.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navList}>
        <Link href={'/'} className={styles.link}>
          Home
        </Link>
        <Link href={'/projects'} className={styles.link}>
          Projects
        </Link>
        <Link legacyBehavior href={'../Resume.pdf'} className={styles.link}>
          <a target="_blank" rel="noopener noreferrer" className={styles.link}>
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
}

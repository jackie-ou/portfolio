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
        <Link href={'https://github.com/jackie-ou/portfolio/issues'} className={styles.link}>
          Resume
        </Link>
      </div>
    </div>
  );
}

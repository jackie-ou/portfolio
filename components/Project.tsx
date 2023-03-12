import React, { ReactNode } from 'react';
import styles from '@/styles/Grid.module.css';

type Props = {
  NavBar: ReactNode;
};

const Project = ({ NavBar }: Props) => {
  return (
    <div>
      <header className={styles.navBar}>{NavBar}</header>
      <div className={styles.gridBody}>
        <div className={styles.gridContainer}>
          <div className={styles.card}>Project 1</div>
          <div className={styles.card}>Project 2</div>
          <div className={styles.card}>Project 3</div>
          <div className={styles.card}>Project 4</div>
        </div>
      </div>
    </div>
  );
};

export { Project };

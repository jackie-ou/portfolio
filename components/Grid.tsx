import React from "react";
import styles from "@/styles/Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.gridBody}>
      <div className={styles.gridContainer}>
        <div className={styles.card}>Project 1</div>
        <div className={styles.card}>Project 2</div>
        <div className={styles.card}>Project 3</div>
        <div className={styles.card}>Project 4</div>
      </div>
    </div>
  );
};

export { Grid };

import React, { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import styles from '@/styles/Landing.module.css';
import Image from 'next/image';

type Props = {
  NavBar: ReactNode;
};

type CardProps = {
  sectionClass: string;
  h2Content: string;
  pContent: string;
};

const Card = ({ sectionClass, h2Content, pContent }: CardProps) => {
  return (
    <section className={`${sectionClass} ${styles.card}`}>
      <h2 className={styles.sectionTitles}>{h2Content}</h2>
      <p className={styles.text}>{pContent}</p>
    </section>
  );
};

export { Card };

const Landing = ({ NavBar }: Props) => {
  return (
    <article className={styles.body}>
      <header className={styles.navBar}>{NavBar}</header>
      <section className={styles.header}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Hi! I’m Jackie.</h1>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/IMG_2880.jpg"
            alt="Picture of me"
            width="300"
            height="300"
            className={styles.picture}
          />
        </div>
      </section>
      <Card
        sectionClass={styles.aboutMe}
        h2Content={'About Me 📝'}
        pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio porro cumque iste
          quidem illo temporibus deleniti. Doloremque consequatur quis sint, porro rem saepe maiores
          ducimus id, vitae, expedita voluptatum? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A ipsum consectetur incidunt facere maxime. Accusamus corporis nemo a!
          Temporibus, culpa beatae. Voluptas provident rem natus reiciendis tenetur nisi similique
          fugiat!"
      />
      {/* TODO: Add icons or mansonry grid */}
      <Card
        sectionClass={styles.mySkills}
        h2Content={'Skills 💻'}
        pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio porro cumque iste
          quidem illo temporibus deleniti. Doloremque consequatur quis sint, porro rem saepe maiores
          ducimus id, vitae, expedita voluptatum? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A ipsum consectetur incidunt facere maxime. Accusamus corporis nemo a!
          Temporibus, culpa beatae. Voluptas provident rem natus reiciendis tenetur nisi similique
          fugiat! Temporibus, culpa beatae. Voluptas provident rem natus reiciendis tenetur nisi similique
          fugiat!"
      />
      <section className={`${styles.connectWithMe} ${styles.card}`}>
        <h2 className={styles.sectionTitles}>Connect With Me! 🌐</h2>
        <div className={styles.footerLinks}>
          <div className={styles.linkContainer}>
            <Icon icon="mdi:business-card" color="#fcfcfc" className={styles.icons} />
            Resume
          </div>
          <div className={styles.linkContainer}>
            <Icon icon="uil:linkedin" className={styles.icons} />
            LinkedIn
          </div>
          <div className={styles.linkContainer}>
            <Icon icon="mdi:github" color="#fcfcfc" className={styles.icons} />
            Github
          </div>
          <div className={styles.linkContainer}>
            <Icon icon="mdi:email" color="#fcfcfc" className={styles.icons} />
            Email
          </div>
        </div>
      </section>
    </article>
  );
};

export { Landing };

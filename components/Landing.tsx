import React, { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import styles from '@/styles/Landing.module.css';
import Image from 'next/image';

type Props = {
  NavBar: ReactNode;
};

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
      <section className={`${styles.aboutMe} ${styles.card}`}>
        <h2 className={styles.sectionTitles}>About Me 📝</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio porro cumque iste
          quidem illo temporibus deleniti. Doloremque consequatur quis sint, porro rem saepe maiores
          ducimus id, vitae, expedita voluptatum? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A ipsum consectetur incidunt facere maxime. Accusamus corporis nemo a!
          Temporibus, culpa beatae. Voluptas provident rem natus reiciendis tenetur nisi similique
          fugiat!
        </p>
      </section>
      <section className={`${styles.mySkills} ${styles.card}`}>
        <h2 className={styles.sectionTitles}>Skills 💻</h2>
        {/* TODO: Add icons or mansonry grid */}
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique voluptatibus
          expedita accusamus eum incidunt iste saepe quia autem culpa. Ducimus molestias cumque
          deleniti harum est eius quia vitae perspiciatis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores aliquam officiis sunt earum ea quisquam odio saepe modi ipsa
          nulla, cumque libero excepturi voluptatum vitae. Distinctio dolor voluptatibus optio
          repellendus. Voluptas provident rem natus reiciendis tenetur nisi similique fugiat!
          Voluptas provident rem natus reiciendis tenetur nisi similique fugiat!
        </p>
      </section>
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

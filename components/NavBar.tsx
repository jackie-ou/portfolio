// import React, { useState } from 'react';
// import styles from '@/styles/NavBar.module.css';
// import { Icon } from '@iconify/react';

// type Props = {
//   isActive: boolean;
//   setIsActive: Function;
// };

// const Hamburger = ({ isActive, setIsActive }: Props) => {
//   return (
//     <Icon
//       icon="icon-park-outline:hamburger-button"
//       color="#fcfcfc"
//       className={styles.hamburger}
//       onClick={() => setIsActive(!isActive)}
//     />
//   );
// };
// export { Hamburger };

// const Links = ({ isActive, setIsActive }: Props) => {
//   return (
//     <div className={styles.navContainer}>
//       <ul className={styles.navList} onClick={() => setIsActive(!isActive)}>
//         <li>Home</li>
//         <li>Projects</li>
//         <li>Resume</li>
//       </ul>
//     </div>
//   );
// };
// export { Links };

// const NavBar = () => {
//   const [isActive, setIsActive] = useState(true);
//   return (
//     <>
//       {isActive ? (
//         <Hamburger isActive={true} setIsActive={setIsActive} />
//       ) : (
//         <Links isActive={false} setIsActive={setIsActive} />
//       )}
//     </>
//   );
// };
// export { NavBar };

import styles from '@/styles/NavBar.module.css';
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <>
      <Icon
        icon="icon-park-outline:hamburger-button"
        color="#fcfcfc"
        className={styles.hamburger}
        onClick={event => (window.location.href = '/menu')}
      />
    </>
  );
};

export { NavBar };

// import React from 'react';
// import styles from './index.module.css';
// import { useNavigate } from 'react-router-dom';

// export const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div className={styles.container}>
//       <div className={styles.mainContent}>
//         <div className={styles.textSection}>
//           <div className={styles.textContent}>
//             Experienced <span className={styles.highlight}>mobile and web </span> 
//             applications and website builders measuring.
//           </div>
//           <div className={styles.textDescription}>
//             KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications 
//             and website builders measuring dozens of completed projects. We build and develop 
//             mobile applications for several top platforms, including Android & IOS.
//           </div>
//           <div className={styles.buttons}>
//             <button className={styles.primaryButton} onClick = {()=>{navigate('/contactUs')}}>Contact us</button>
//             <button className={styles.secondaryButton}>View more</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textSection}>
          <div className={styles.textContent}>
            Experienced <span className={styles.highlight}>mobile and web </span>&nbsp;
            applications and website builders measuring.
          </div>
          <div className={styles.textDescription}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications 
            and website builders measuring dozens of completed projects. We build and develop 
            mobile applications for several top platforms, including Android & IOS.
          </div>
          <div className={styles.buttons}>
            <button 
              className={styles.primaryButton} 
              onClick={() => navigate('/contactUs')}
            >
              Contact us
            </button>
            <button className={styles.secondaryButton}>View more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

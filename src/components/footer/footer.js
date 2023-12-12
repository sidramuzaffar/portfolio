import styles from '../../styles/Footer.module.css'

// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.pagfooeter}>
      <div className={styles.footersection}>
        <h3>FIND ME</h3>
        <p>
          Address<br />
         abc house <br />
         lahore
        </p>
        <p>
          Contact Me<br />
          Phone: 111111111111<br />
          Email: abc@gmail.com
        </p>
      </div>

      <div className={styles.footersection}>
        <h3>ABOUT Me</h3>
        <p>
          My name is sidra from superior university in 5th semester etc...
        </p>
      </div>

      <div className={styles.footersection}>
        <h3>SEARCH</h3>
        <form className={styles.searchform} action="/search" method="GET">
          <input type="text" name="q" placeholder="Search for:" />
          <button type="submit">Search</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

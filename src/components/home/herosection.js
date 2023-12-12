// components/Hero.js
import 'animate.css';
import Link from 'next/link';
import styles from '../../styles/Hero.module.css';
import 'animate.css';
const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={`animate__animated animate__fadeIn ${styles.heroTitle}`}>
                    Hello! all I'm Sidra</h1>
                <Link href="/">
                    <div className={styles.heroButton}>DISCOVER ME</div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;

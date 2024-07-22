import styles from './Hero.module.css';
import Profile_img from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import NameWriter from '../features/NameWriter';
import My_Resume from '../../assets/numanresume.pdf';

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={Profile_img} alt="Profile Img" className={styles['hero-img']} />

      <h1>
        Hey, I am
        <span className={styles.name}>
          <NameWriter />
        </span>
      </h1>
      <p>
        i am Proficient in React, React Router, Context API, Redux, and Next.js
        with strong experience in GitHub version control.
      </p>
      <div className={styles['hero-action']}>
        <Link to="/contact" className={styles['hero-connect']}>
          Connect with me
        </Link>
        <Link
          to={My_Resume}
          onClick={My_Resume}
          className={styles['hero-resume']}
          download
        >
          Download my Cv
        </Link>
      </div>
    </div>
  );
}

export default Hero;

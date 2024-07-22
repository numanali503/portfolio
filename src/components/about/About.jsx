import styles from './About.module.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_photo from '../../assets/Profile_img.png';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles['about-title']}>
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className={styles['about-section']}>
        <div className={styles['about-left']}>
          <img src={profile_photo} alt="Profile Image" />
        </div>
        <div className={styles['about-right']}>
          <div className={styles['about-para']}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              nesciunt animi eos officiis quod? Placeat voluptas in, Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Suscipit quae
              similique provident obcaecati error illo autem soluta, aspernatur,
              consectetur beatae corporis incidunt eos deleniti! Quam ut odio
              eum maxime pariatur!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              ratione ex sed tempore impedit voluptatum quam sit iste
              perspiciatis id!
            </p>
          </div>
          <div className={styles['about-skills']}>
            <div className={styles['about-skill']}>
              <p>HTML & CSS</p> <hr style={{ width: '80%' }} />
            </div>
            <div className={styles['about-skill']}>
              <p>JavaScript</p> <hr style={{ width: '60%' }} />
            </div>
            <div className={styles['about-skill']}>
              <p>React Js</p> <hr style={{ width: '70%' }} />
            </div>
            <div className={styles['about-skill']}>
              <p>Next Js</p> <hr style={{ width: '55%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['about-achivements']}>
        <div className={styles['about-achivement']}>
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className={styles['about-achivement']}>
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className={styles['about-achivement']}>
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;

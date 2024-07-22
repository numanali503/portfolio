import styles from './Projects.module.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles['projects-title']}>
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className={styles['projects-container']}>
        {mywork_data.map((project, index) => {
          return (
            <>
              <div key={index} className={styles['project-box']}>
                <img
                  key={project.p_no}
                  src={project.p_img}
                  alt={project.p_name}
                />
                <h1 className={styles.overlay}>{project.p_name}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

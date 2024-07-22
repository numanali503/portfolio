import styles from './Services.module.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Servies_Data from '../../assets/services_data';

function Sevices() {
  return (
    <div className={styles.services}>
      <div className={styles['services-title']}>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className={styles['services-container']}>
        {Servies_Data.map((service, index) => {
          return (
            <div key={index} className={styles['services-format']}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sevices;

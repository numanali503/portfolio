/* eslint-disable react/no-unescaped-entities */
import styles from './ContactUs.module.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useState } from 'react';

function ContactUs() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '428ee05e-32fe-4c63-9080-cc365b67148d');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles['contact-title']}>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className={styles['contact-section']}>
        <div className={styles['contact-left']}>
          <h1>Let's talk</h1>
          <p>
            i'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className={styles['contact-details']}>
            <div className={styles['contact-detail']}>
              <img src={mail_icon} alt="Mail Icon" />
              <p>numanali9771@gmail.com</p>
            </div>
            <div className={styles['contact-detail']}>
              <img src={call_icon} alt="Call Icon" />
              <p>+923489709771</p>
            </div>
            <div className={styles['contact-detail']}>
              <img src={location_icon} alt="Location Icon" />
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className={styles['contact-right']}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            name="email"
            required
            placeholder="Enter your email"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Enter your message"
          />
          <span className={styles['form-message']}>{result}</span>
          <button type="submit" className={styles['contact-submit']}>
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

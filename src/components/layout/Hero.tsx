import styles from './Hero.module.scss';
import { Link } from "react-router-dom";
import buttonStyles from "@/components/common/Button.module.scss";

function Hero() {

  return (
    <section className={styles.hero} id="herosection">
      {/* Hero Text */}
      <div className={styles.textContainer}>
        <h1>Create a professional CV in minutes!</h1>
        <p>With our easy-to-use interface and carefully designed templates, you can create a professional CV in minutes. 🚀</p>
        <Link className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} to="/template" ><img src={`${import.meta.env.BASE_URL}assets/arrow.svg`} alt="arrow" />Start Creating Your CV! ✨</Link>
        <div className={styles.customerContainer}>
          <img src={`${import.meta.env.BASE_URL}assets/customersprofilepictures.png`} />
          <p>Loved by 3.1 million users!</p>
        </div>
      </div>
      {/* Hero Image*/}
      <div className={styles.imageContainer}>
        <img src={`${import.meta.env.BASE_URL}assets/herocvimage.webp`} alt="cv template photo" />
        <a className={styles.imglink1}>
          <div className={styles.textContent}>
            <h4>Tahaberk Soysal</h4>
            <p>Front-end Developer</p>
            <img src={`${import.meta.env.BASE_URL}assets/fivestars.png`} />
          </div>
          <div className={styles.imgContent}>
            <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero

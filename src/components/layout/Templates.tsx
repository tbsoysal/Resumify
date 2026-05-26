import { Link } from "react-router-dom";
import styles from './Templates.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import { TemplatesCarousel } from "./TemplatesCarousel";

function Templates() {

  return (
    <section className={styles.templates}>
      <div className={styles.textcontent} >
        <h2>Free CV Templates</h2>
        <p>
          Stop worrying about formatting — with our modern, ATS-friendly (Applicant Tracking
          System) templates, create a professional resume that stands out at any career level.
        </p>
      </div>
      <TemplatesCarousel />
      <Link className={`${buttonStyles.button} ${styles.showTemplatesButton}`} to={'/template'}>View All Templates</Link>
    </section>
  );
}

export default Templates;
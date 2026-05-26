import styles from './Howitworks.module.scss';

function Howitworks() {
  return (
    <section className={styles.howitworks}>
      <h2>How Resumify works</h2>
      <ul>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step1-content-1000.webp" alt="" />
          <div className={styles.textContent}>
            <h3>1. Add your content easily</h3>
            <p>Build your resume — we guide you through each step so you achieve a professional and impressive result.</p>
          </div>
        </li>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step2-design-1000.webp" alt="" />
          <div className={styles.textContent}>
            <h3>2. Customize the design effortlessly</h3>
            <p>Choose from over 50 templates and customize every detail to match your style and career.</p>
          </div>
        </li>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step3-download-1000.webp" alt="" />
          <div className={styles.textContent}>
            <h3>3. Download and Share</h3>
            <p>Download your resume as a PDF or share it online via a unique link.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Howitworks
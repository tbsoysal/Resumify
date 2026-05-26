import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.flexContainer}>
          <img src={`${import.meta.env.BASE_URL}assets/resumify-logo-transparent.svg`} alt="logo" />
          <span>Resumify</span>
        </div>
        <p className={styles.description}>Resumify is a project developed using modern web technologies. Designed and coded with React.js, the platform aims to provide a user-friendly experience. All design and development work was carried out by web developer Tahaberk Soysal. It is carefully prepared to help users create fast, stylish, and effective resumes.</p>
        <p className={styles.shareText}>Share Resumify with your friends:</p>
        <ul>
          <li><a href=""><i className="fa-solid fa-envelope"></i></a></li>
          <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href=""><i className="fa-brands fa-square-facebook"></i></a></li>
          <li><a href=""><i className="fa-brands fa-square-x-twitter"></i></a></li>
        </ul>
        <p className={styles.infoText}>© 2025 Resumify – Design and development: Tahaberk Soysal</p>
      </div>
    </footer>
  )
}

export default Footer

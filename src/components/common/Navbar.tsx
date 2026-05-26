import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss";
import buttonStyles from "./Button.module.scss";

function Navbar() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      let maxOpacity = window.innerWidth > 520 ? 1 : 0.7;
      const newOpacity = Math.min(scrollY / maxScroll, maxOpacity);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navbar} style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
      <Link to="/" className={styles.logoContainer}>
        <img src={`${import.meta.env.BASE_URL}assets/hazircv-logo-transparan.svg`} alt="Resumify logo" />
        <h2>Resumify</h2>
      </Link>
      <ul className={styles.navigationContainer}>
        <li><Link className={`${buttonStyles.button} ${buttonStyles.secondaryButton}`} to="/template">Templates</Link></li>
        <li><Link className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} to="/create">Create CV</Link></li>
      </ul>
    </header >
  )
}
export default Navbar


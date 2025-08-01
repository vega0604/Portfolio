import { Link } from 'react-router-dom';
import styles from '@styles/footer.module.css';

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>© 2025 by Sebastian Vega</p>
            <ul className={styles.links_list}>
                <li>
                    <a href='https://www.linkedin.com/in/sebastian-vega-orozco/' target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin</a>
                </li>
                <li>
                    <a href="/resume.pdf" target="_blank" className={styles.link}>resume</a>
                </li>
                <li>
                    <a href='mailto:sebasvega4604@gmail.com' target="_blank" className={styles.link}>contact</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
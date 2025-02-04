import { Link } from 'react-router-dom';
import styles from '@styles/footer.module.css';

function Footer(){
    return (
        <footer className={`${styles.footer} container`}>
            <p>© 2025 by Sebastian Vega. All rights reserved.</p>
            <ul className={styles.links_list}>
                <li>
                    <a href="/resume.pdf" target="_blank" className={styles.link}>resume</a>
                </li>
                <li>
                    <Link to='contact' className={styles.link}>contact me</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
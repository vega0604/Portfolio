import { Link } from 'react-router-dom';
import styles from '@styles/footer.module.css';

function Footer(){
    return (
        <footer className={`${styles.footer} container`}>
            <p>© 2025 by Sebastian Vega. All rights reserved.</p>
            <Link to='contact'>contact me</Link>
        </footer>
    );
}

export default Footer;
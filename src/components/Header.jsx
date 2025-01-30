import styles from '@styles/header.module.css';

function Header(){
    return (
        <header className={`${styles.header} container`}>
            <h1>Sebastian Vega</h1>
        </header>
    );
}

export default Header;
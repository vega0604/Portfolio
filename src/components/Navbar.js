import { useLocation, Link } from 'react-router-dom';
import styles from '@css/navbar.module.css';

import smiley from '@images/smiley.svg';
import overview from '@images/overview.svg';
import about from '@images/about.svg';
import projects from '@images/projects.svg';
import socials from '@images/socials.svg';

function Navbar(){
    const { pathname } = useLocation();

    const links = [
        {path: 'overview', icon: overview, name: 'Overview'},
        {path: 'about', icon: about, name: 'About Me'},
        {path: 'projects', icon: projects, name: 'Projects'},
        {path: 'socials', icon: socials, name: 'Socials'}
    ];

    return(
        <nav id={styles.navbar}>
            <div id={styles.banner}>
                <img src={smiley} alt='smiley'/>
                <h1>vega0604</h1>
            </div>
            <ul id={styles.nav_links}>
                {links.map((link) => {
                    return (
                        <li key={link.path} class={`${styles.link_group} ${pathname === `/${link.path}` && styles.active}`}>
                            <Link to={link.path}>
                                <img src={link.icon} alt={`${link.name} icon`}/>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>  
        
            <div id={styles.ellipsis}>
                <div></div>
                <ul id={styles.drop_down}></ul>
            </div>
        </nav>
    );
}

export default Navbar;
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '@css/navbar.module.css';

import smiley from '@images/smiley.svg';
import overview from '@images/overview.svg';
import about from '@images/about.svg';
import projects from '@images/projects.svg';
import socials from '@images/socials.svg';

function calcWidth(links){
    return links.reduce((acc, curr) => acc + curr.width + 16, 0) - 16;
}

function updateLinks(vLinks, hLinks){
    var navbar = document.getElementById(styles.navbar);
    var ellipsis = document.getElementById(styles.ellipsis);

    var availableSpace = navbar.getBoundingClientRect().width - ellipsis.getBoundingClientRect().width - 50;

    if (vLinks.length > 1 && calcWidth(vLinks) > availableSpace){
        hLinks.push(vLinks.pop());
    } else if (hLinks.length > 0 && calcWidth(vLinks) < availableSpace){
        vLinks.push(hLinks.pop());
    }

    if (vLinks.length > 1 && calcWidth(vLinks) > availableSpace){
        return updateLinks(vLinks, hLinks);
    }

    return [vLinks, hLinks];
}

function Navbar(){
    const { pathname } = useLocation();

    const [toggle, setToggle] = useState(false);

    const [links, setLinks] = useState([
        {path: 'overview', icon: overview, name: 'Overview', width: pathname === '/overview' ? 102.359: 99.797},
        {path: 'about', icon: about, name: 'About Me', width: pathname === '/about' ? 100.047: 98.250},
        {path: 'projects', icon: projects, name: 'Projects', width: pathname === '/projects' ? 90.766: 89.172},
        {path: 'socials', icon: socials, name: 'Socials', width: pathname === '/socials' ? 83.625: 82.344}
    ]);

    const [dynamicLinks, setDynamicLinks] = useState([]);

    useEffect(() => {
        function handleResize(){
            var result = updateLinks([...links], [...dynamicLinks]);

            setLinks(result[0]);
            setDynamicLinks(result[1]);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <nav id={styles.navbar}>
            <div id={styles.banner}>
                <img src={smiley} alt='smiley'/>
                <h1>vega0604</h1>
            </div>
            <ul id={styles.nav_links}>
                {links.length > 0 && links.map((link) => {
                    return (
                        <li key={link.path} className={`${styles.link_group} ${pathname === `/${link.path}` ? styles.active: undefined}`}>
                            <Link to={link.path}>
                                <img src={link.icon} alt={`${link.name} icon`}/>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>  
        
            <div id={styles.ellipsis} onClick={() => setToggle(!toggle)}>
                <div></div>
            </div>
            <ul id={styles.drop_down} className={(!toggle || dynamicLinks.length === 0) ? styles.hidden: undefined}>
                {dynamicLinks.map((link) => {
                    return (
                        <li key={link.path} className={styles.link_group}>
                        <Link to={link.path}>
                            <img src={link.icon} alt={`${link.name} icon`}/>
                            <p>{link.name}</p>
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '@css/navbar.module.css';

import smiley from '@images/smiley.svg';
import overview from '@images/overview.svg';
import about from '@images/about.svg';
import projects from '@images/projects.svg';
import socials from '@images/socials.svg';

function Navbar(){
    const { pathname } = useLocation();

    const [toggle, setToggle] = useState(false);

    const [links, setLinks] = useState([
        {path: 'overview', icon: overview, name: 'Overview'},
        {path: 'about', icon: about, name: 'About Me'},
        {path: 'projects', icon: projects, name: 'Projects'},
        {path: 'socials', icon: socials, name: 'Socials'}
    ]);

    const [dynamicLinks, setDynamicLinks] = useState([]);

    useEffect(() => {
        const linksCopy = [...links];
        const dynamicLinksCopy = [...dynamicLinks];

        function handleResize(){
            // fix with function parameters for list states
            var vLinks = document.getElementById(styles.nav_links);
            var dropdown = document.getElementById(styles.drop_down).children;
            var navbar = document.getElementById(styles.navbar);
            var ellipsis = document.getElementById(styles.ellipsis);


            var availableSpace = navbar.getBoundingClientRect().width - ellipsis.getBoundingClientRect().width - 50;
            if (vLinks.children.length > 1 && vLinks.getBoundingClientRect().width + 50 >= availableSpace){
                dynamicLinksCopy.push(linksCopy.pop());
            } else if (dropdown.length > 0 && vLinks.getBoundingClientRect().width + dropdown.item(dropdown.length-1).getBoundingClientRect().width + 50 < availableSpace){
                linksCopy.push(dynamicLinksCopy.pop());
            }

            setLinks(linksCopy);
            setDynamicLinks(dynamicLinksCopy);
            // if (vLinks.length > 1 && vLinksWidth >= availableSpace){
            //     handleResize();
            // }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            // window.removeEventListener('load', handleResize);
        };
    }, [links, dynamicLinks]);

    return(
        <nav id={styles.navbar}>
            <div id={styles.banner}>
                <img src={smiley} alt='smiley'/>
                <h1>vega0604</h1>
            </div>
            <ul id={styles.nav_links}>
                {links.length > 0 && links.map((link) => {
                    return (
                        <li key={link.path} className={`${styles.link_group} ${pathname === `/${link.path}` && styles.active}`}>
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
            <ul id={styles.drop_down} className={(!toggle || dynamicLinks.length === 0) && styles.hidden}>
                {dynamicLinks.map((link) => {
                    return (
                        <li key={link.path} className={`${styles.link_group} ${pathname === `/${link.path}` && styles.active}`}>
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
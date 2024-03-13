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
            const margin = 400;
            const sum = linksCopy.reduce((prev, curr) => prev + 100, 0);
            console.log(sum);
            if (window.innerWidth < sum + margin && linksCopy.length > 1) {
                dynamicLinksCopy.push(linksCopy.pop());

            } else if (dynamicLinksCopy.length > 0) {
                linksCopy.push(dynamicLinksCopy.pop());
                
            }
            setLinks(linksCopy);
            setDynamicLinks(dynamicLinksCopy);
        }

        // handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', () => {
            for (let i=0; i < 3; i++){
                handleResize();
            }
        });
        return () => window.removeEventListener('resize', handleResize);
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
        
            <div id={styles.ellipsis}>
                <div onClick={() => setToggle(!toggle)}></div>
                {toggle && 
                    <ul id={styles.drop_down}>
                        {dynamicLinks.length > 0 && dynamicLinks.map((link) => {
                            return (
                                <li ref={link.ref} key={link.path} className={`${styles.link_group} ${pathname === `/${link.path}` && styles.active}`}>
                                <Link to={link.path}>
                                    <img src={link.icon} alt={`${link.name} icon`}/>
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                            );
                        })}
                    </ul>
                }
            </div>
        </nav>
    );
}

export default Navbar;
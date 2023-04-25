import Image from "next/image";
import logo from "$/logo.svg";
import aboutMe from "$/aboutme.svg";
import myProjects from "$/myprojects.svg";
import contactMe from "$/contactme.svg";
import styles from "@/styles/Navbar.module.css";

export default function Navbar(){
    return (
        <ul className={styles.navlist}>
            <li className={`${styles.logo}`}>
                <Image src={logo} alt="Logo"/>
            </li>
            <li className={`${styles.navbarItem}`} >
                <Image src={aboutMe} alt="About Me"/>
            </li>
            <li className={`${styles.navbarItem}`} >
                <Image src={myProjects} alt="My Projects"/> 
            </li>
            <li className={`${styles.navbarItem}`} >
                <Image src={contactMe} alt="Contact Me"/>
            </li>
        </ul>
    );
}
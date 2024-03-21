import { Outlet } from "react-router-dom";
import styles from "@css/layout.module.css";
import Navbar from "@components/Navbar";
import Profile from "@components/Profile";


function Layout(){
    return(
        <>
            <Navbar />
            <section id={styles.general}>
                <Profile/>
                <Outlet />
            </section>
        </>
    );
}

export default Layout;
import { Link } from "react-router-dom";
import styles from "@css/profile.module.css";
import avatar from "@images/avatar.jpeg";

function Profile(){
    return(
        <div id={styles.profile}>
            <img src={avatar} id={styles.avatar} alt="avatar"/>
            <div id={styles.text}>
                <h2>Sebastian Vega</h2>
                <h3>vega0604 · he/him</h3>
            </div>
            <Link to="https://github.com/vega0604" target="_blank">View Profile</Link>
        </div>
    );
}

export default Profile;
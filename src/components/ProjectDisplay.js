import styles from "@css/projectDisplay.module.css";
import { useState, useEffect } from "react";
import { States } from "Helpers";
import { Link } from "react-router-dom";

function ProjectDisplay({name, description, techStack, status, contributors}){
    const [statusColor, setStatusColor] = useState("");

    useEffect(() => {
        switch (status){
            case States.Complete:
                setStatusColor(styles.greenPill);
                break;
            case States.InProgress:
                setStatusColor(styles.orangePill);
                break;
            case States.Incomplete:
                setStatusColor(styles.redPill);
                break;
            case States.Undefined:
                setStatusColor(styles.greyPill);
                break;
        }
    }, []);

    return (
        <div className={styles.displayContainer}>
            <div className={styles.title}>
                <h3>{name}</h3>
                <p className={`${styles.statusPill} ${statusColor}`}>{status}</p>
            </div>
            <p className={styles.description}>{description}</p>
            {techStack.length > 0 && 
                <p className={styles.techStack}>
                    <span></span>{techStack[0]}
                </p>
            }
        </div>
    );
}

export default ProjectDisplay;
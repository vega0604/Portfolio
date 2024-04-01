import styles from "@css/overviewDisplay.module.css";
import { States } from "Helpers";
import { useEffect, useState } from "react";

function OverviewDisplay({name, description, techStack, status, contributors}){
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
            <p className={`${styles.statusPill} ${statusColor}`}>{status}</p>
            <div className={styles.displayContent}>
                <h3 className={styles.projectName}>{name}</h3>
                <p className={styles.description}>{description}</p>
                
                {techStack.length > 0 && 
                <p className={styles.techStack}>
                    <span></span>{techStack[0]}
                </p>
                }
            </div>
        </div>
    );
}

export default OverviewDisplay;
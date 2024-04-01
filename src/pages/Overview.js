import { ProjectContext } from "App";
import { useContext, useState } from "react";
import OverviewDisplay from "@components/OverviewDisplay";
import styles from "@css/overview.module.css";

function Overview(){
    const projects = useContext(ProjectContext);
    const [priority] = useState(projects.slice(0, 4));

    return(
        <section id={styles.overviewSection}>
            <h2>Popular Repositories</h2>
            <div id={styles.container}>
                {priority.map((project) => <OverviewDisplay key={project.name} {...project}/>)}
            </div>
        </section>
    );
}

export default Overview;
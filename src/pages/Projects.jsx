import { PROJECTS } from "@data/projects";
import { COLLABORATORS } from "@data/collaborators";
import { TOOLS, STATUS, PROJECT_TYPE } from "@data/enums";
import { stackToString, stackToConicGradient, dateToString } from "@utils/converters";
import { useState } from "react";
import styles from "@styles/projects.module.css";

function Projects(){
    const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);

    return (
        <section className={styles.project_section}>
            <search className={styles.form_container}>
                <form>
                    <div className={styles.searchbar_container}>
                        <input type="text" />
                        <div className={styles.filters_container}>
                            <div>
                                <h3>Date</h3>
                                <ul>
                                    
                                </ul>
                            </div>
                            <div>
                                <h3>Status</h3>
                                <ul>
                                    
                                </ul>
                            </div>
                            <div>
                                <h3>Type</h3>
                                <ul>
                                    
                                </ul>
                            </div>
                            <div>
                                <h3>Tech</h3>
                                <ul>
                                    
                                </ul>
                            </div>
                            <div>
                                <h3>Collaborators</h3>
                                <ul>
                                    
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.sorter_container}>
                        <button></button>
                        <div></div>
                    </div>
                </form>
            </search>
            <ul className={styles.project_list}>
                {displayedProjects.map((project, i) => 
                    <li key={i} className={styles.project_item}>
                        <h2 className={styles.project_name}>{project.name}</h2>
                        <p className={styles.project_dates}>{dateToString(project.start_date)} {project.end_date && `- ${dateToString(project.end_date)}`}</p>
                        <p className={styles.project_description}>{project.description}</p>
                        <div className={styles.development_info_container}>
                            <div className={styles.tech_stack_container}>
                                <div className={styles.piechart} style={{background: `conic-gradient(${stackToConicGradient(project.tech_stack)})`}}></div>
                                <p>{stackToString(project.tech_stack)}</p>
                            </div>
                            <ul className={styles.collaborators_list}>
                                {project.collaborators.map((person, j) => person.github && 
                                    <li key={j} className={styles.collaborator}>
                                        <a href={person.github} target="_blank">
                                            <img src={`${person.github}.png`} alt="Collaborator GitHub" />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Projects;
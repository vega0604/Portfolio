import { PROJECTS } from "@data/projects";
import { COLLABORATORS } from "@data/collaborators";
import { TOOLS, STATUS, PROJECT_TYPE } from "@data/enums";
import { stackToString, stackToConicGradient, dateToString } from "@utils/converters";
import Fuse from "fuse.js";
import { useEffect, useState, useCallback } from "react";
import styles from "@styles/projects.module.css";
import sortby from "@assets/home/sortby_icon.svg";

function Projects() {
    const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
    const [selectedProject, setSelectedProject] = useState(-1);
    const [searching, setSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortMode, setSortMode] = useState('default'); // 'default', 'name-asc', 'name-desc', 'date-asc', 'date-desc'

    function handleProjectClick(e, project, i) {
        if (e.target.closest('a')) {
            return;
        }
        
        if (!project.link) {
            setSelectedProject(selectedProject === i ? -1 : i);
        } else {
            window.open(project.link, '_blank');
        }
    }

    const fuseOptions = {
        threshold: 0.4,
        keys: [
            'name',
            'description'
        ]
    };
    const fuse = new Fuse(PROJECTS, fuseOptions);

    const sortProjects = useCallback((projects) => {
        const sortedProjects = [...projects];
        
        switch(sortMode) {
            case 'name-asc':
                sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedProjects.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'date-asc':
                sortedProjects.sort((a, b) => a.start_date - b.start_date);
                break;
            case 'date-desc':
                sortedProjects.sort((a, b) => b.start_date - a.start_date);
                break;
            default:
                // Default order (original order from projects.js)
                return projects;
        }
        
        return sortedProjects;
    }, [sortMode]);

    const handleSortClick = () => {
        setSortMode(prevMode => {
            switch(prevMode) {
                case 'default': return 'name-asc';
                case 'name-asc': return 'name-desc';
                case 'name-desc': return 'date-asc';
                case 'date-asc': return 'date-desc';
                case 'date-desc': return 'default';
                default: return 'default';
            }
        });
    };

    useEffect(() => {
        let result = searchTerm ? fuse.search(searchTerm).map((r) => r.item) : PROJECTS;
        
        if (sortMode !== 'default') {
            result = sortProjects(result);
        }
        
        setDisplayedProjects(result);
    }, [searchTerm, sortMode, sortProjects]);

    return (
        <section className={styles.project_section}>
            <search className={styles.form_container}>
                <form>
                    <div className={styles.searchbar_container}>
                        <input type="text" placeholder="Enter Search Term..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={(e) => e.target.click()} onClick={() => setSearching(true)} onBlur={() => setSearching(false)} />
                        {/* <div className={styles.filters_container} data-toggled={searching}>
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
                        </div> */}
                    </div>
                    <div className={styles.sorter_container}>
                        <button onClick={(e) => { e.preventDefault(); handleSortClick(); }}>
                            <img src={sortby} alt="Sort" />
                            {sortMode === 'default' ? 'Sort' : 
                             sortMode === 'name-asc' ? 'Name (A-Z)' :
                             sortMode === 'name-desc' ? 'Name (Z-A)' :
                             sortMode === 'date-asc' ? 'Date (Oldest First)' : 'Date (Newest First)'}
                        </button>
                        <div></div>
                    </div>
                </form>
            </search>
            <ul className={styles.project_list}>
                {displayedProjects.map((project, i) =>
                    <li 
                        key={i} 
                        className={`${styles.project_item} ${project.link ? styles.clickable : ''}`} 
                        onClick={(e) => handleProjectClick(e, project, i)}
                        data-selected={selectedProject === i}
                    >
                        <div className={styles.project_header}>
                            <h2 className={styles.project_name}>{project.name} <span className={`${styles.project_status} ${project.status == STATUS.COMPLETE ? styles.complete : styles.in_progress}`} /></h2>
                            <p className={styles.project_dates}>{dateToString(project.start_date)} {project.end_date && `- ${dateToString(project.end_date)}`}</p>
                        </div>
                        <div className={styles.project_body}>
                            <p className={styles.project_description}>{project.description}</p>
                            <div className={styles.development_info_container}>
                                <div className={styles.tech_stack_container}>
                                    <div className={styles.piechart} style={{ background: `conic-gradient(${stackToConicGradient(project.tech_stack)})` }}></div>
                                    <p>{stackToString(project.tech_stack)}</p>
                                </div>
                                <ul className={styles.collaborators_list}>
                                    {project.collaborators.map((person, j) => person.github &&
                                        <li key={j} className={styles.collaborator}>
                                            <a href={person.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                                                <img src={`${person.github}.png`} alt="Collaborator GitHub" />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Projects;
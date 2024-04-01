import { ProjectContext } from "App";
import { useContext } from "react";
import ProjectDisplay from "components/ProjectDisplay";

function Projects(){
    const projects = useContext(ProjectContext);
    return(
        <section>
            {projects.map((project) => <ProjectDisplay {...project}/>)}
        </section>
    );
}

export default Projects;
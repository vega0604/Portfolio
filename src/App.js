import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext } from "react";
import ProjectList from "Helpers";
import Layout from "@pages/Layout";
import Overview from "@pages/Overview";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Socials from "@pages/Socials";

import "@css/globals.css";


export const ProjectContext = createContext();

function App() {
  const [projects] = useState(ProjectList);
  
  return (
    <BrowserRouter>
      <ProjectContext.Provider value={projects}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate to="overview" replace={true}/>}/>
            <Route path="overview" element={<Overview />}/>
            <Route path="about" element={<About />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="socials" element={<Socials />}/>
          </Route>
        </Routes>
      </ProjectContext.Provider>
    </BrowserRouter>
  );
}

export default App;

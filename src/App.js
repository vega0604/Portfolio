import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@pages/Layout";
import Overview from "@pages/Overview";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Socials from "@pages/Socials";

import "@css/global.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />}>
          <Route path="" element={<Overview />}/>
          <Route path="overview" element={<Overview />}/>
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="socials" element={<Socials />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

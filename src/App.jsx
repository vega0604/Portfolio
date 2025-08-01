import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@pages/Layout';
import Projects from '@pages/Projects';
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Projects />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

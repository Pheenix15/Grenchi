import{Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectCategory from './pages/ProjectCategory';
import ProjectArticle from './pages/ProjectArticle';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:categorySlug" element={<ProjectCategory/>} />
        <Route path="/projects/:categorySlug/:projectSlug" element={<ProjectArticle />} />
      </Routes>
    </>
  )
}

export default App

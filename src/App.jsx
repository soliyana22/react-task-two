import { BrowserRouter} from 'react-router-dom';
import React from 'react'
import './App.css'
import {Route,Routes,Link} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Our_project } from './pages/Our_project'
import {Photo_Gallery} from './pages/Photo_Gallery'
import {Contact} from './pages/Contact'
import Footer from './pages/footer';
function App() {
  

  return (
    <>
    <BrowserRouter>
   
    <nav className="navbar">
    
      <div className='header'>
        <img src="assets/images/logo.png" alt="logo image" className='logo'/>
      </div>
    <ul className="nav-list">
        <li><Link to="/">MAIN</Link></li>
        <li><Link to="/photogallery">Gallery</Link></li>
        <li><Link to="/ourproject">Project</Link></li>
        <li><Link to="/photogallery">Certifications</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
    </nav>
  
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/ourproject' element={<Our_project/>} />
      <Route path='/photogallery' element={<Photo_Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    
  </BrowserRouter>
  <Footer/>
 </> 
  )
}

export default App

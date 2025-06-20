import { BrowserRouter} from 'react-router-dom';
import React from 'react'

import {Route,Routes,Link} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Our_project } from './pages/Our_project'
import {Photo_Gallery} from './pages/Photo_Gallery'
import Footer from './pages/footer';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">MAIN</Link></li>
        <li><Link to="/ourproject">Our Project</Link></li>
        <li><Link to="/photogallery">Photo Gallery</Link></li>
      </ul>
    </nav>
  
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/ourproject' element={<Our_project/>} />
      <Route path='/photogallery' element={<Photo_Gallery/>} />
    </Routes>
    
  </BrowserRouter>
  <Footer/>
 </> 
  )
}

export default App

import { BrowserRouter} from 'react-router-dom';
import React from 'react'
import './App.css'
import {Route,Routes,Link} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Our_project } from './pages/Our_project'
import {Photo_Gallery} from './pages/Photo_Gallery'
import {Contact} from './pages/Contact'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
function App() {
  

  return (
    <>
      
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/ourproject' element={<Our_project/>} />
      <Route path='/photogallery' element={<Photo_Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
      <Footer/>  
  </BrowserRouter>


 </> 
  )
}

export default App

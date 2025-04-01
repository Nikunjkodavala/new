
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Ecomm from './components/Navbar/Ecomm';
import HomePage from './Page/HomePage';
import Footer from './components/Navbar/Footer';
import Sidebar from './Page/Sidebar';
import SimpleButton from './components/Buttons/SimpleButton';
import ProjectCategories from '../src/Page/ProjectCategories';
import Projects from '../src/Page/Projects';



function App() {

  return (
   
      <div className=' font-serif'>
        <Ecomm/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/ProjectCategories' element={<ProjectCategories/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/cart' element={<Sidebar/>} >
                <Route path='' element={<SimpleButton/>} />
                <Route path="side" element={<Sidebar/>} />
            </Route>
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App



import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Ecomm from './components/Navbar/Ecomm';
import HomePage from './Page/HomePage';
import Footer from './components/Navbar/Footer';
import Sidebar from './Page/Sidebar';
import Buttons from './components/Buttons/Buttons';
import ProjectCategories from '../src/Page/ProjectCategories';
import Projects from '../src/Page/Projects';
import GetCode from './Page/GetCode';



function App() {

  return (
   
      <div className=' font-serif'>
        {/* <Ecomm/> */}
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/cart' element={<Sidebar/>} >
                <Route path='getcode' element={<GetCode/>} />
                <Route path='button' element={<Buttons/>} />
                <Route path='ProjectCategories' element={<ProjectCategories/>} />
                <Route path="side" element={<Sidebar/>} />
            </Route>
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App


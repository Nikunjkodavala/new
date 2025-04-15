
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Ecomm from './components/Navbar/Ecomm';
import HomePage from './Page/HomePage';
import Footer from './components/Navbar/Footer';
import Sidebar from './Page/Sidebar';
import Buttons from './components/Sidebar/Buttons';
import ProjectCategories from '../src/Page/ProjectCategories';
import Projects from '../src/Page/Projects';
import GetCode from './Page/GetCode';
import Checkbox from './components/Sidebar/Checkbox';
import ToggelButton from './components/Sidebar/ToggelButton';
import Loader from './components/Sidebar/Loaders';
import Card from './components/Sidebar/Card';
import Form from './components/Sidebar/Form';
import Inputs from './components/Sidebar/Inputs';
import RadioButton from './components/Sidebar/RadioButton'



function App() {

  return (
   
      <div className=' font-serif'>
        <Ecomm/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/cart' element={<Sidebar/>} >
                <Route path='button' element={<Buttons/>} />
                <Route path='checkbox' element={<Checkbox/>} />
                <Route path='toggel' element={<ToggelButton/>} />
                <Route path='loader' element={<Loader/>} />
                <Route path='card' element={<Card/>} />
                <Route path='form' element={<Form/>} />
                <Route path='input' element={<Inputs/>} />
                <Route path='radio' element={<RadioButton/>} />
                <Route path='getcode' element={<GetCode/>} />
                <Route path='ProjectCategories' element={<ProjectCategories/>} />
                <Route path="side" element={<Sidebar/>} />
            </Route>
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App


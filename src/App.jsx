
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Ecomm from './components/Navbar/Ecomm';
import HomePage from './Page/HomePage';
import Footer from './components/Navbar/Footer';
import AboutUs from './Page/AboutUs';
import ContectUs from './Page/ContactUs';
import Sidebar from './Page/Sidebar';
import Buttons from './components/Sidebar/Buttons';
import ProjectCategories from '../src/Page/ProjectCategories';
import Projects from '../src/Page/Projects';
import ProjectSellingPage  from './Page/ProjectSelling';
import GetCode from './Page/GetCode';
import Checkbox from './components/Sidebar/Checkbox';
import ToggelButton from './components/Sidebar/ToggelButton';
import Loader from './components/Sidebar/Loaders';
import Card from './components/Sidebar/Card';
import Form from './components/Sidebar/Form';
import Inputs from './components/Sidebar/Inputs';
import RadioButton from './components/Sidebar/RadioButton'
import ToolTips from './components/Sidebar/ToolTips';
import NotFoundPages from './components/Sidebar/404Pages';



function App() {

  return (
   
      <div className=' font-serif'>
        <Ecomm/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/AboutUs' element={<AboutUs/>} />
            <Route path='/ContactUs' element={<ContectUs/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/ProjectSelling' element={<ProjectSellingPage/>} />
            <Route path='/ProjectCategories' element={<ProjectCategories/>} />
            <Route path='/cart' element={<Sidebar/>} >
                <Route path='button' element={<Buttons/>} />
                <Route path='checkbox' element={<Checkbox/>} />
                <Route path='toggel' element={<ToggelButton/>} />
                <Route path='loader' element={<Loader/>} />
                <Route path='card' element={<Card/>} />
                <Route path='form' element={<Form/>} />
                <Route path='input' element={<Inputs/>} />
                <Route path='radio' element={<RadioButton/>} />
                <Route path='tooltip' element={<ToolTips/>} />
                <Route path='404pages' element={<NotFoundPages/>} />
                <Route path='getcode' element={<GetCode/>} />
                <Route path="side" element={<Sidebar/>} />
            </Route>
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App


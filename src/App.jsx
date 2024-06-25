import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  

  return (

    <BrowserRouter>
      <div>

        <Navbar />
        <Sidebar />
    
  
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pim' element={<PIM />}></Route>
          <Route path='/leave' element={<Leave />}></Route>
          <Route path='/time' element={<Time />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/directory' element={<Directory />}></Route>
          <Route path='/maintainence' element={<Maintainence />}></Route>
          <Route path='/buzz' element={<Buzz />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
      
  )
}

export default App

function Home() {
  return <h1>hello tap on pim</h1>
}
function PIM() {
  return <div className="employee_container container">
            <h4 className="employee_title">Add Employee</h4>
            <div className="img_upload">
              <FaUserCircle className='user_icon'/>
              <p className="user_desc">accepts jpg png gif up to 1MB Recommended dimension: 200px x 200px</p>
            </div>
            <form className="emloyee-form">
              <h4 className="employee_name">Employee Full Name*</h4>
              <div className="form_input-group">
                <div className="form_input">
                  <input type="text" placeholder='First Name'  />
                </div>
                <div className="form_input">
                  <input type="text" placeholder='Middle Name'  />
                </div>
                <div className="form_input">
                  <input type="text" placeholder='Last Name'  />
                </div>
              </div>

              <h4 className="employee_id">Employee Id</h4>
              <div className="employee_input">
                  <input type="text" placeholder='0011' className='form_control' />
                </div>
                <div className="btn-btn">
                  <button className='btn_md'>Cancel</button>
                  <button className='btn_md'>Save</button>
                </div>
            </form>

  </div>
  
}
function Leave() {
  return <h1>hello</h1>
}
function Time() {
  return <h1>hello</h1>
}
function Info() {
  return <h1>hello</h1>
}
function Dashboard() {
  return <h1>hello</h1>
}
function Directory() {
  return <h1>hello</h1>
}
function Maintainence() {
  return <h1>hello</h1>
}
function Buzz() {
  return <h1>hello</h1>
}

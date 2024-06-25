import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import { FaBuildingUser } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { PiToolbox } from "react-icons/pi";
import { PiTimer } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import { TiContacts } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar_menu">
        
        <h3 className='sidebar_title'>Orange<span>HRM</span></h3>
        <div className="">
         <ul className="sidebar_items">
            <LiaSearchSolid  className='search_icon'/><input className='search' type="text" placeholder='Search'/>
            
            <li className="sidebar_item">
                <Link to="/" className='sidebar_link'><FaBuildingUser className='icon' />Admin</Link>
            </li>
            <li className="sidebar_item active-link">
                <Link to="pim" className='sidebar_link'><PiUsersThree className='icon ' />PIM</Link>
            </li>
            <li className="sidebar_item">
                <Link to="leave" className='sidebar_link'><PiToolbox className='icon'  />leave</Link>
            </li>
            <li className="sidebar_item">
                <Link to="time" className='sidebar_link'><PiTimer className='icon' />Time</Link>
            </li>
            <li className="sidebar_item">
                <Link to="info" className='sidebar_link'><FaRegUser className='icon' />My Info</Link>
            </li>
            <li className="sidebar_item">
                <Link to="dashboard" className='sidebar_link'><SlHome className='icon' />Dashboard</Link>
            </li>
            <li className="sidebar_item">
                <Link to="directory" className='sidebar_link'><TiContacts className='icon' />Directory</Link>
            </li>
            <li className="sidebar_item">
                <Link to="maintainence" className='sidebar_link'><FiSettings className='icon' />Maintainence</Link>
            </li>
            <li className="sidebar_item">
                <Link to="buzz" className='sidebar_link'><HiOutlineChatAlt2 className='icon' />Buzz</Link>
            </li>
       </ul>
        </div>
        <button className='btn'>
            <RiArrowRightSLine />
        </button>
    </div>
  )
}

export default Sidebar

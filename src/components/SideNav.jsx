import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { AdminSideNavData } from './asserts/js/AdminSideNavData'
import './asserts/css/AdminSideNav.css'
// import { IconContext } from "react-icons";

function SideNav() {
    const [sideNav, setSideNav] = useState(false);
    const showSideNav = () => setSideNav(!sideNav);
    return (
        <>
            {/* <IconContext.Provider value={{ color: "#fff" }}> */}
            <div className="navbar">
                <Link to="#" className="menu-bars dark">
                    <FaIcons.FaBars onClick={showSideNav} />
                </Link>
            </div>
            <nav className={sideNav ? 'nav-menu active' : 'nav-menu'}>

                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        
                        <Link to="#" className='menu-bars'>
                            < AiIcons.AiOutlineClose onClick={showSideNav} />
                        </Link>
                        <div className='d-flex justify-content-center'>
                            <Link to="#" className={sideNav ? 'd-none' : 'menu-bars menu-bars-icon '  }>
                                <FaIcons.FaBars onClick={showSideNav} />
                            </Link>
                        </div>
                    </li>
                    {
                        AdminSideNavData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <div className={sideNav ? 'd-block' : 'big-icon'     }>{item.icon}</div>
                                        <span className={sideNav ? 'd-block' : 'd-none'     }>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
            {/* </IconContext.Provider> */}
        </>
    )
}

export default SideNav

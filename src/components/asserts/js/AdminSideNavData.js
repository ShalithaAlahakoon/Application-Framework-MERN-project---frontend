import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";



export const AdminSideNavData = [
    {
        title: 'Dashboard',
        path: '/home',
        icon: <FaIcons.FaTachometerAlt />,
        cName: 'nav-text'

    },
    {
        title: 'Students',
        path: '/students',
        icon: <FaIcons.FaChild />,
        cName: 'nav-text'
    },
    {
        title: 'Groups',
        path: '/groups',
        icon: <MdIcons.MdGroup />,
        cName: 'nav-text'
    },
    {
        title: 'Research topics',
        path: '/topics',
        icon: <GiIcons.GiMagnifyingGlass />,
        cName: 'nav-text'
    },
    {
        title: 'Documents',
        path: '/document',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    
    {
        title: 'Supervisors',
        path: '/supervisors',
        icon: <GiIcons.GiTeacher />,
        cName: 'nav-text'
    }
    // {
    //     title: 'Categories',
    //     path: '/admin/categories',
    //     icon: <IoIcons.IoIosBook />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Reviews',
    //     path: '/admin/reviews',
    //     icon: <IoIcons.IoIosChatbubbles />,
    //     cName: 'nav-text'
    // },
  
]
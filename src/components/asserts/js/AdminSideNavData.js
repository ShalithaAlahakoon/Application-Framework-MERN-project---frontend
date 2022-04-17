import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";


export const AdminSideNavData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <FaIcons.FaTachometerAlt />,
        cName: 'nav-text'

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Students',
        path: '/students',
        icon: <FaIcons.FaChild />,
        cName: 'nav-text'
    },
    {
        title: 'Supervisors',
        path: '/admin/supervisors',
        icon: <GiIcons.GiTeacher />,
        cName: 'nav-text'
    },
    {
        title: 'Categories',
        path: '/admin/categories',
        icon: <IoIcons.IoIosBook />,
        cName: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/admin/reviews',
        icon: <IoIcons.IoIosChatbubbles />,
        cName: 'nav-text'
    }
]
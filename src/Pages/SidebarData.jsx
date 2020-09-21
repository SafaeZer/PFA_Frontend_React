import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IconName  from "react-icons/si";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <IoIcons.IoIosCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Classes',
    path: '/classes',
    icon: <IconName.SiGoogleclassroom />,
    cName: 'nav-text'
  },
]
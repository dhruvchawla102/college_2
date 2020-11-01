import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as BsIcons from 'react-icons/bs';

export const SidebarDataClg = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Upload',
    path: '/upload',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Mentors',
    path: '/mentors',
    icon: <BsIcons.BsPeopleCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Faculty',
    path: '/faculty',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'To-do',
    path: '/todo',
    icon: <FcIcons.FcTodoList/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/support',
    icon: <IoIcons.IoIosSettings />,
    cName: 'nav-text'
  }
];
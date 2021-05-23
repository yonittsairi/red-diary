import React from 'react'
import logo from '../assets/img/logo.png'
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function Header({ openChat }) {
    return (
        <div className="main-header flex space-between">
            <Link to="/">
                <div className="logo">   <div className="book">
                    <span className="page turn"></span>
                    <span className="page turn"></span>
                    <span className="page turn"></span>
                    <span className="page turn"></span>
                    <span className="page turn"></span>
                    <span className="page turn"></span>
                    <span className="cover"></span>
                    <span className="page"></span>
                    <span className="cover turn"></span></div>
                </div></Link> <div className="flex align-center">

            </div>
            <ul className="header-list flex space-between">
                <li className="header-link"><SupervisedUserCircleIcon onClick={openChat} /></li>
                <li className="header-link"> <Link to="/About"><HelpIcon /></Link></li>
                <li className="header-link">    <Link to="/Messages">

                    <ChatIcon /></Link></li>
                <li className="header-link"> <Link to="/Diary">
                    <HomeIcon size={'large'} /></Link></li>
                <li className="header-link"> <Link to="/Login-signup"> <Avatar className="avatar" /></Link>  </li>

            </ul>
        </div>
    )
}

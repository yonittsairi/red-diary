import React from 'react'
import logo from '../assets/img/logo.png'
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function Header() {
    return (
        <div className="main-header flex space-between align-center">
            <div className="header-link flex  align-center">
                <Link to="/">     <h3>היומן האדום</h3></Link></div>
            <ul className="header-list flex space-between">
                <li className="header-link"><SupervisedUserCircleIcon /></li>
                <li className="header-link"> <Link to="/About"><HelpIcon /></Link></li>
                <li className="header-link">    <Link to="/Messages">

                    <ChatIcon /></Link></li>
                <li className="header-link"> <Link to="/">
                    <HomeIcon size={'large'} /></Link></li>
                <li className="header-link"> <Link to="/Login-signup"> <Avatar /></Link>  </li>

            </ul>
        </div>
    )
}

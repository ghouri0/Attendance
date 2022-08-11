import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="logo">
            Texinity  Technologies
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>
                Dashboard
              </span>
            </li>
          </Link>
          <p className="title">Attendance</p>
          <Link to='/customers' style={{ textDecoration: 'none' }}>
            <li>
              <PeopleAltSharpIcon className='icon' />
              <span>
                Employees
              </span>
            </li>
          </Link>
          <Link to='/sellers' style={{ textDecoration: 'none' }}>
            <li>
              <StorefrontSharpIcon className='icon' />
              <span>
                Internees
              </span>
            </li>
          </Link>
          <Link to='/attend' style={{ textDecoration: 'none' }}>
            <li>
              <GroupsIcon className='icon' />
              <span>
                Attendance
              </span>
            </li>
          </Link>
          <p className="title">Admin Profile</p>
          <Link to='/profile' style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleSharpIcon className='icon' />
              <span>
                Profile
              </span>
            </li>
          </Link>
          <li>
            <LogoutRoundedIcon className='icon' />
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

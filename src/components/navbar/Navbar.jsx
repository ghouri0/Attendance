import React from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="" id="" placeholder='Search..' />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className="items">
                    <div className="item">
                        <NotificationsOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <img src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

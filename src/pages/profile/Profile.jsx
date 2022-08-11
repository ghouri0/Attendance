import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Profile() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="container">
                    <div className="titleContainer" style={{height: 'max-content', display: 'flex', flexDirection: 'column'}}>
                        <div className="title">
                            <h1 style={{ display: 'flex' }}>
                                <PersonOutlineIcon style={{ padding: '5px', color: 'crimson', fontSize: '35px', display: 'flex' }} />
                                Admin Profile
                            </h1>
                            <div className="profile">
                                <h4>
                                    Email: admin@gmail.com
                                    <br />
                                    <br />
                                    UserName: Admin 
                                </h4>
                                <button style={{backgroundColor: 'crimson', border: 'none', borderRadius: '5px', color: 'white', width: '50%', height: '50px', padding: '5px', margin: 'auto', fontSize: '20px', fontWeight: 'bold', alignItems: 'center', cursor: 'pointer'}} >
                                Reset Password
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="titleContainer" style={{ width: '95%', height: 'max-content', margin: '15px' }}>
                    <div className="title">
                        Attendance
                    </div>
                    <Attendance />
                </div> */}
            </div>
        </div>
    )
}

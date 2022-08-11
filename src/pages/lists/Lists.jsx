import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import GroupsIcon from '@mui/icons-material/Groups';
import Attendance from '../../components/attendance/Attendance';

export default function Lists() {
  return (
    <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="container">
                    <div className="titleContainer">
                        <div className="title">
                            <h1 style={{ display: 'flex' }}>
                                <GroupsIcon style={{ padding: '5px', color: 'crimson', fontSize: '35px', display: 'flex'}} />
                                View Attendance
                            </h1>
                            {/* <button style={{backgroundColor: 'crimson', border: 'none', borderRadius: '5px', color: 'white', width: '70%', height: '50px', padding: '5px', margin: 'auto', fontSize: '20px', fontWeight: 'bold', alignItems: 'center', cursor: 'pointer'}} >
                                Add Employee
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className="titleContainer" style={{ width: '95%', height: 'max-content', margin: '15px' }}>
                    <div className="title">
                        Attendance
                    </div>
                    <Attendance />
                </div>
            </div>
        </div>
  )
}

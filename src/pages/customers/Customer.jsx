import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import logo from '../../assets/ww.jpg'
import UserTable from '../../components/userTable/UserTable';
import '../delivery/delivery.css'

export default function Customer() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="container">
                    <div className="titleContainer">
                        <div className="title" style={{margin: 'auto'}}>
                            <h1 style={{ display: 'flex' }}>
                                <PeopleAltOutlinedIcon style={{ padding: '5px', color: 'crimson', fontSize: '35px', display: 'flex'}} />
                                Employees Cateloge
                            </h1>
                            <button style={{backgroundColor: 'crimson', border: 'none', borderRadius: '5px', color: 'white', width: '70%', height: '50px', padding: '5px', margin: 'auto', fontSize: '20px', fontWeight: 'bold', alignItems: 'center', cursor: 'pointer'}} >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>
                <div className="titleContainer" style={{ width: '95%', height: 'max-content', margin: '15px' }}>
                    <div className="title">
                        Employees
                    </div>
                    <UserTable />
                </div>
            </div>
        </div>
    )
}

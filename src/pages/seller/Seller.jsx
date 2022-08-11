import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import logo from '../../assets/sell.jpg'
import UserTable from '../../components/userTable/UserTable';

export default function Seller() {
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
                                Internees
                            </h1>
                            <button style={{backgroundColor: 'crimson', border: 'none', borderRadius: '5px', color: 'white', width: '100%', height: '50px', padding: '5px', margin: 'auto', fontSize: '20px', fontWeight: 'bold', alignItems: 'center', cursor: 'pointer'}} >
                                Add Internee
                            </button>
                        </div>
                    </div>
                </div>
                <div className="titleContainer" style={{ width: '95%', height: 'max-content', margin: '15px' }}>
                    <div className="title">
                        Internees
                    </div>
                    <UserTable />
                </div>
            </div>
        </div>
  )
}

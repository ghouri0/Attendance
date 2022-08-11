import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './delivery.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

export default function AddDelivery() {
    const [file, setFile] = useState('');
    console.log(file);
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="formContainer">
                    <div className="image">
                        <h1 style={{ width: '40%', display: 'flex' }}>
                        <HowToRegOutlinedIcon style={{ padding: '10px', color: 'crimson', fontSize: '75px' }} />
                            Register Delivery Boy
                        </h1>
                        <img src={file ? URL.createObjectURL(file) : "https://t4.ftcdn.net/jpg/02/83/72/41/360_F_283724163_kIWm6DfeFN0zhm8Pc0xelROcxxbAiEFI.jpg"} alt="" />
                    </div>
                    <div className="inputs">
                        <form action="">
                            <div className="forminput">
                                <label htmlFor='file'>
                                    Profile Picture <FileUploadOutlinedIcon className='icon2' />
                                </label>
                                <input type="file" id='file' style={{ display: 'none' }} onChange={e => { setFile(e.target.files[0]) }} />
                            </div>
                            <div className="formInput">
                                <label><AccountBoxOutlinedIcon className='icon2' />Full Name</label>
                                <input type="text" placeholder='Ali' />
                            </div>
                            <div className="formInput">
                                <label><MailOutlineOutlinedIcon className='icon2' />Email</label>
                                <input type="email" placeholder='ali@gmail.com' />
                            </div>
                            <div className="formInput">
                                <label><HomeOutlinedIcon className='icon2' />Address</label>
                                <input type="text" placeholder='XYZ' />
                            </div>
                            <div className="formInput">
                                <label><LocalPhoneOutlinedIcon className='icon2' />Phone</label>
                                <input type="text" placeholder='+92 445' />
                            </div>
                            <div className="formInput">
                                <label><LocationCityOutlinedIcon className='icon2' />City</label>
                                <input type="text" placeholder='Islambad' />
                            </div>
                            <div className="formInput">
                                <label><VpnKeyOutlinedIcon className='icon2' />Password</label>
                                <input type="password" />
                            </div>
                            <div className="btn">
                                <input type="button" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

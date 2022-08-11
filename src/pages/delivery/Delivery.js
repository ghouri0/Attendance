import React from 'react'
import './delivery.css'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import logo from '../../assets/delivery.jpg'
import UserTable from '../../components/userTable/UserTable'

export default function Delivery() {
  // const [file, setFile] = useState('');
  // console.log(file);
  
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="container">
          <div className="titleContainer" style={{ backgroundImage: { logo } }}>
            <div className="title">
              <h1 style={{ display: 'flex'}}>
                <HowToRegOutlinedIcon style={{ padding: '5px', color: 'crimson', fontSize: '35px' }} />
                Delivery Registration
              </h1>
            </div>
            <Link to='/addDelivery' style={{ textDecoration: 'none' }}>
              <div className="btn">
                <input type="button" value="Register Delivery Boy" />
              </div>
            </Link>
          </div>
          <div className="deliveryLogo">
            <img src={logo} alt="" style={{ width: '95%', height: '75%', borderRadius: '0px', padding: '15px 15px', border: 'none' }}>
            </img>
          </div>
        </div>
        <div className="titleContainer" style={{ width: '95%', height: 'max-content', margin: '15px' }}>
          <div className="title">
            Registered Delivery Men
          </div>
          <UserTable/>
        </div>
      </div>
    </div>
  )
}

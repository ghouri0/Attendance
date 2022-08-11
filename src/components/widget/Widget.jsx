import React from 'react'
import './widget.css'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Widget({ type }) {
    const data = { title: '', number: '', link: '', icon: '' , percent: 0}
    switch (type) {
        case 'employees':
            data.title = 'Employees';
            data.number = '22';
            data.link = 'See All Employees';
            data.icon = <PeopleAltOutlinedIcon className='icon' style={{color: 'white', width: '50px', height: '50px', margin: 'auto'}}/>
            data.percent = 22
            break;
        case 'internees':
            data.title = 'Internees';
            data.number = '30';
            data.link = 'See All Internees';
            data.icon = <PeopleAltOutlinedIcon className='icon' style={{color: 'white', width: '50px', height: '50px', margin: 'auto'}}/>
            data.percent = 30
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="count">{data.number}</span>
                <Link to='/sellers' style={{textDecoration: 'none'}}>
                    <span className="link">{data.link}</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage">
                    <CircularProgressbar value={ data.percent} maxValue= {100} text= {data.percent+ '%' } strokeWidth= {5} styles={buildStyles({
                        pathColor: 'white',
                        textColor: 'white'
                    })}/>
                </div>
                {data.icon}
            </div>
        </div>
    )
}

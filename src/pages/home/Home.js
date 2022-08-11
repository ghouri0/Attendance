import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'

export default function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type = 'employees'/>
                    <Widget type = 'internees'/>
                </div>
                <div className="charts">
                    <Chart/>
                </div>
                {/* <div className="tableContainer">
                    <div className="tableTitle">
                        Recent Orders
                    </div>
                    <Table1/>
                </div> */}
            </div>
        </div>
    )
}

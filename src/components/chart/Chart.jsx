import React from 'react'
import './chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    date: '1 Aug',
    attend: '87',
  },
  {
    date: '2 Aug',
    attend: '50',

  },
  {
    date: '3 Aug',
    attend: '90',

  },
  {
    date: '4 Aug',
    attend: '80',
  },
  {
    date: '5 Aug',
    attend: '90',
  },
  {
    date: '6 Aug',
    attend: '70',
  }
];

export default function Chart() {
  return (
    <div className='chart'>
      <h2 className="title">
        Attendance
      </h2>
      <AreaChart
        width={1100}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="attend" stroke="lightblue" fill="lightblue" />
      </AreaChart>
    </div>
  )
}

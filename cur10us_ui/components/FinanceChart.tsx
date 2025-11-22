"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'Jun',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jul',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Aug',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Sep',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'Oct',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Nov',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Dec',
        income: 3490,
        expense: 4300,
    },
];


const FinanceChart = () =>{
    return(
        <div className="bg-white rounded-lg p-4 pb-8 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" width={20} height={20} alt=""/>
            </div>
            <ResponsiveContainer height="100%" width="90%">
               <LineChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}/>
                    <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={4}/>
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={4}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart
"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Thứ 2',
        present: 650,
        absent: 350,
    },
    {
        name: 'Thứ 3',
        present: 780,
        absent: 220,
    },
    {
        name: 'Thứ 4',
        present: 900,
        absent: 100,
    },
    {
        name: 'Thứ 5',
        present: 600,
        absent: 400,
    },
    {
        name: 'Thứ 6',
        present: 580,
        absent: 420,
    },
    {
        name: 'Thứ 7',
        present: 700,
        absent: 300,
    },
    {
        name: 'Chủ nhật',
        present: 100,
        absent: 900,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Thông tin điểm danh</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" virtical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                        formatter={(value) => (value === "present" ? "Có mặt" : "Vắng mặt")}
                    />
                    <Bar dataKey="present" fill="#bae5f4"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar dataKey="absent" fill="#f4ddba"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
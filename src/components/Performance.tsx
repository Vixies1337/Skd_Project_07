"use client"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    { name: 'Group A', value: 920, fill: "#C3EBFA" },
    { name: 'Group B', value: 80, fill: "#FAE27C" },
];

const Performance = () => {
    return (
        <div className='bg-white p-4 rounded-md h-80 relative'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Performance</h1> 
                <Image src='/moreDark.png' alt='' width={16} height={16} />
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                    />
                </PieChart>
            </ResponsiveContainer>

            {/* Chỉnh sửa phần căn giữa */}
            <div className='absolute inset-0 flex items-center justify-center flex-col'>
                <h1 className='text-3xl font-bold'>9.2</h1>
                <p className='text-xs text-gray-300'>Thang điểm 10</p>
            </div>

            <h2 className='font-medium absolute bottom-16 left-0 right-0 text-center'>Kỳ 1 - Kỳ 2</h2>     
        </div>
    );
};

export default Performance;

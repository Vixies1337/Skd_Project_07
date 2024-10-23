"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
    {
        id: 1,
        title: "Halloween",
        time: "2024-10-31",
        description: "Halloween is a holiday celebrated each year",
    },
    {
        id: 2,
        title: "Tét",
        time: "2024-10-31",
        description: "Test sự kiện 2",
    },
    {
        id: 3,
        title: "BÃO LỤT",
        time: "2024-10-31",
        description: "TEST SỰ KIỆN 3",
    }
]


const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Sự kiện</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
                {events.map((event) => (
                    <div className='p-5 rounded-md border-2 bordergray-100 border-t-4 odd:border-t-POrange even:border-t-PCyan' key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <span className='text-gray=300 text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default EventCalendar
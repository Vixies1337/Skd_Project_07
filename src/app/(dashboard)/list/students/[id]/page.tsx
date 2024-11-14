import Announcements from "@/components/Announcement"
import BigCalendar from "@/components/BigCalender"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-PCyan py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image src="/student.jpg" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Tống Vi</h1>
                            <p className="text-sm text-gray-500">AKA Vixies~</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>A Rh+</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>28 Dec 2003</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>ViXinh@gmail.com</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>+84 366666666</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                            <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Điểm Danh</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                            <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">4th</h1>
                                <span className="text-sm text-gray-400">Năm Thứ</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                            <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">15</h1>
                                <span className="text-sm text-gray-400">Tiết Học</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                            <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">D101K13</h1>
                                <span className="text-sm text-gray-400">CNTT</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1>Lịch Dạy</h1>
                <BigCalendar/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Lối Tắt</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link className="p-3 rounded-md bg-POrange" href={`/list/teachers?classId=${2}`}>Giảng viên</Link>
                    <Link className="p-3 rounded-md bg-PCyan" href={`/list/lessons?classId=${2}`}>Tiết học</Link>
                    <Link className="p-3 rounded-md bg-PYellow" href={`/list/exams?classId=${2}`}>Lịch Thi</Link>
                    <Link className="p-3 rounded-md bg-PCyan" href={`/list/assignments?classId=${2}`}>Phân Công</Link>
                    <Link className="p-3 rounded-md bg-POrange" href={`/list/results?classId=${2}`}>Điểm Thi</Link>
                </div>
            </div>
            <Performance/>
            <Announcements/>
            </div>
        </div>
    )
}

export default SingleStudentPage
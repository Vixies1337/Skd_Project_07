import Link from 'next/link';
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import {announcementsData, role } from "@/lib/data";


type Announcement = {
    id: number;
    title: string;
    class: string;
    date: string;
};

const columns = [
    { header: "Tiêu đề", accessor: "title" },
    { header: "Lớp", accessor: "class" },
    { header: "Thời gian", accessor: "date", className: "hidden md:table-cell" },
    { header: "Hành động", accessor: "actions" }
];


const AnnouncementListPage = () => {
    const renderRow = (item: Announcement) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
            <td className='flex items-center gap-4 p-4 '>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.title}</h3>
                </div>
            </td>
            <td className="">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teacher/${item.id}`} legacyBehavior>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/edit.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PPurple">
                            <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Thông Báo</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/filter.png" alt="" width={20} height={20} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/sort.png" alt="" width={20} height={20} />
                        </button>
                        {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/plus.png" alt="" width={20} height={20} />
                        </button>)}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={announcementsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default AnnouncementListPage;

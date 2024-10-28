import Link from 'next/link';
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import { assignmentsData, role } from "@/lib/data";
import FormModel from '@/components/FormModel';


type Assignment = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
};

const columns = [
    { header: "Tên môn học", accessor: "subject" },
    { header: "Lớp", accessor: "class", className: "hidden md:table-cell" },
    { header: "Giảng viên", accessor: "teacher" },
    { header: "Hạn nộp", accessor: "dueDate" },
    { header: "Hành động", accessor: "actions" }
];

const AssignmentsListPage = () => {
    const renderRow = (item: Assignment) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
            <td className='flex items-center gap-4 p-4 '>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.subject}</h3>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="">{item.teacher}</td>
            <td className="">{item.dueDate}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModel table='assignment' type='update' data={item} />
                            <FormModel table='assignment' type='delete' id={item.id} />

                        </>

                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Bài Tập</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/filter.png" alt="" width={20} height={20} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/sort.png" alt="" width={20} height={20} />
                        </button>
                        {role === "admin" && (
                         <FormModel table='assignment' type='create'/>    
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default AssignmentsListPage;

import Link from 'next/link';
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import { classesData, role } from "@/lib/data";
import FormModel from '@/components/FormModel';


type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number
    supervisor: string;
};

const columns = [
    { header: "Tên lớp", accessor: "name" },
    { header: "Số sinh viên", accessor: "capacity", className: "hidden md:table-cell" },
    { header: "Lớp", accessor: "grade", className: "hidden md:table-cell" },
    { header: "Giáo viên chủ nghiệm", accessor: "supervisor" },
    { header: "Hành động", accessor: "actions" }
];

const ClassListPage = () => {
    const renderRow = (item: Class) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
            <td className='flex items-center gap-4 p-4 '>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="">{item.supervisor}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teacher/${item.id}`} legacyBehavior>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <FormModel table='class' type='delete' id={item.id} />
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Các lớp học</h1>
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
                            <FormModel table='subject' type='create'/>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={classesData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default ClassListPage;

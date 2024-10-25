import Link from 'next/link';
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import { role } from "@/lib/data";
import { teachersData } from "@/lib/data";

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
};

const columns = [
    { header: "Thông tin", accessor: "info" },
    { header: "Mã giảng viên", accessor: "teacherId", className: "hidden md:table-cell" },
    { header: "Môn học", accessor: "subjects", className: "hidden md:table-cell" },
    { header: "Lớp", accessor: "classes", className: "hidden md:table-cell" },
    { header: "SĐT", accessor: "phone", className: "hidden lg:table-cell" },
    { header: "Địa chỉ", accessor: "address", className: "hidden lg:table-cell" },
    { header: "Hành động", accessor: "actions" },
];

const TeacherListPage = () => {
    const renderRow = (item: Teacher) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
            <td className='flex items-center gap-4 p-4 '>
                <Image
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
            <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teacher/${item.id}`} legacyBehavior>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PCyan">
                            <Image src="/view.png" alt="" width={16} height={16} />
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
                <h1 className="hidden md:block text-lg font-semibold">Giảng viên</h1>
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
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PPurple">
                                <Image src="/delete.png" alt="" width={16} height={16} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={teachersData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default TeacherListPage;

import Link from 'next/link';
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import { classesData, role } from "@/lib/data";
import FormModel from '@/components/FormModel';
import { Class, Prisma, Teacher } from '@prisma/client';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';


type ClassList =  Class & {supervisor: Teacher};

const columns = [
    { header: "Tên lớp", accessor: "name" },
    { header: "Số sinh viên", accessor: "capacity", className: "hidden md:table-cell" },
    { header: "Lớp", accessor: "grade", className: "hidden md:table-cell" },
    { header: "Giáo viên chủ nghiệm", accessor: "supervisor" },
    { header: "Hành động", accessor: "actions" }
];

const renderRow = (item: ClassList) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
        <td className='flex items-center gap-4 p-4 '>
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
            </div>
        </td>
        <td className="hidden md:table-cell">{item.capacity}</td>
        <td className="hidden md:table-cell">{item.name[0]}</td>
        <td className="">{item.supervisor.name + " " + item.supervisor.surname}</td>
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
const ClassListPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {

    const { page, ...queryParams } = searchParams;

    const p = page ? parseInt(page) : 1;

    // URL Params condition

    const query: Prisma.ClassWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "supervisorId":
                        query.supervisorId = value
                        break;
                    case "search":
                        query.name = { contains: value, mode: "insensitive" }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    const [data, count] = await prisma.$transaction([
        prisma.class.findMany({
            where: query,
            include: {
                supervisor: true,
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
        }),
        prisma.class.count({ where: query }), 
    ]);

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
            <Table columns={columns} renderRow={renderRow} data={data} />
            {/* PAGINATION */}
            <Pagination page={p} count={count} />
        </div>
    );
};

export default ClassListPage;

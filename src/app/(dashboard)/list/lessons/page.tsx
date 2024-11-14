import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from 'next/image';
import { role } from "@/lib/data";
import FormModel from '@/components/FormModel';
import { Lesson, Prisma, Subject, Teacher, Class } from '@prisma/client';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';


type LessonList = Lesson & { subject: Subject } & { class: Class } & { teacher: Teacher };

const columns = [
    { header: "Tên môn học", accessor: "subject" },
    { header: "Lớp", accessor: "class", className: "hidden md:table-cell" },
    { header: "Giảng viên", accessor: "teacher" },
    { header: "Hành động", accessor: "actions" }
];

const renderRow = (item: LessonList) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PYellowLight'>
        <td className='flex items-center gap-4 p-4 '>
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.subject.name}</h3>
            </div>
        </td>
        <td className="hidden md:table-cell">{item.class.name}</td>
        <td className="">{item.teacher.name + " " + item.teacher.surname}</td>
        <td>
            <div className="flex items-center gap-2">
                {role === "admin" && (
                    <>
                        <FormModel table='lesson' type='update' data={item} />
                        <FormModel table='lesson' type='delete' id={item.id} />
                    </>
                )}
            </div>
        </td>
    </tr>
);

const LessonListPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {

    const { page, ...queryParams } = searchParams;

    const p = page ? parseInt(page) : 1;

    // URL Params condition

    const query: Prisma.LessonWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "classId":
                        query.classId = parseInt(value);
                        break;
                    case "teacherId":
                        query.teacherId = value;
                        break;
                    case "search":
                        query.OR = [
                            { subject: { name: { contains: value, mode: "insensitive" } } },
                            { teacher: { name: { contains: value, mode: "insensitive" } } },
                        ];
                        break;
                    default:
                        break;
                }
            }
        }
    }
    const [data, count] = await prisma.$transaction([
        prisma.lesson.findMany({
            where: query,
            include: {
                subject: { select: { name: true } },
                class: { select: { name: true } },
                teacher: { select: { name: true, surname: true } },
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1),
        }),
        prisma.lesson.count({ where: query }),
    ]);

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Bài Giảng</h1>
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
                            <Image src="/create.png" alt="" width={20} height={20} />
                        </button>)}
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

export default LessonListPage;

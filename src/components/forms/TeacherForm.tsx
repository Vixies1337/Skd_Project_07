"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const schema = z.object({
    username: z.string().min(3, { message: 'Username phải lớn hơn 3 ký tự' })
        .max(30, { message: 'Username phải nhỏ hơn 30 ký tự' }),
    email: z.string().email({ message: "Email không đúng định dạng" }),
    password: z.string().min(12, { message: "Mật khẩu phải trên 12 ký tự" }),
    firstName: z.string().min(1, { message: "Yêu cầu nhập tên" }),
    lastName: z.string().min(12, { message: "Yêu cầu nhập tên" }),
    phone: z.string().min(12, { message: "Yêu cầu nhập sđt" }),
    address: z.string().min(12, { message: "Yêu cầu nhập địa chỉ" }),
    birhtday: z.date({ message: "Yêu cầu nhập ngày sinh" }),
    sex: z.enum(["male", "female"], { message: "Yêu cầu nhập giới tính" }),
    img: z.instanceof(File, { message: "Yêu cầu nhập ảnh" })
});


const TeacherForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });


    return (
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Thêm mới giảng viên</h1>
            <span className="text-xs text-gray-400 font-medium">Xác thực thông tin</span>
            <div className="flex flex-col gap-2 w-full md:w-1/4">
                <label className="text-xs text-gray-500">Username</label>
                <input
                    type="text"
                    {...register("username")}
                    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                />
                {errors.username?.message && (
                    <p className="text-xs text-red-400">
                        {errors.username?.message.toString()}
                    </p>
                )}
            </div>

            <span className="text-xs text-gray-400 font-medium">Thông tin cá nhân</span>
            <button className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm 
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    username: z.string().min(3, { message: 'Username phải lớn hơn 3 ký tự' })
        .max(30, { message: 'Username phải nhỏ hơn 30 ký tự' }),
    email: z.string().email({ message: "Email không đúng định dạng" }),
    password: z.string().min(8, { message: "Mật khẩu phải trên 8 ký tự" }),
    firstName: z.string().min(1, { message: "Yêu cầu nhập tên" }),
    lastName: z.string().min(12, { message: "Yêu cầu nhập tên" }),
    phone: z.string().min(12, { message: "Yêu cầu nhập sđt" }),
    address: z.string().min(12, { message: "Yêu cầu nhập địa chỉ" }),
    bloodType: z.string().min(12, { message: "Yêu cầu nhập nhóm máu" }),
    birthday: z.date({ message: "Yêu cầu nhập ngày sinh" }),
    sex: z.enum(["male", "female"], { message: "Yêu cầu nhập giới tính" }),
    img: z.instanceof(File, { message: "Yêu cầu tải lên ảnh" })
});

type Inputs = z.infer<typeof schema>;


const StudentForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });


    return (
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Thêm mới sinh viên</h1>
            <span className="text-xs text-gray-400 font-medium">Xác thực thông tin</span>

            <div className='flex justify-between flex-wrap gap-4'>

                <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors.username} />

                <InputField label="Email" name="email" type="email" defaultValue={data?.email} register={register} error={errors.email} />

                <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors.password} />
            </div>
            <span className="text-xs text-gray-400 font-medium">Thông tin cá nhân</span>
            <div className='flex justify-between flex-wrap gap-4'>

                <InputField label="Họ" name="text" defaultValue={data?.lastName} register={register} error={errors.lastName} />

                <InputField label="Tên" name="lastName" type="text" defaultValue={data?.lastName} register={register} error={errors.lastName} />

                <InputField label="SĐT" name="phone" type="text" defaultValue={data?.phone} register={register} error={errors.phone} />

                <InputField label="Địa chỉ" name="address" type="text" defaultValue={data?.address} register={register} error={errors.address} />

                <InputField label="Nhóm máu" name="bloodType" type="text" defaultValue={data?.bloodType} register={register} error={errors.bloodType} />

                <InputField label="Ngày sinh" name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors.birthday} />
            </div>

            <div className='flex justify-between flex-wrap gap-4'>

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label className="text-xs text-gray-500">Giới tính</label>
                    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                    {errors.sex?.message && (
                        <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-500 flex items-center gap-2 cursor pointer" htmlFor="img">
                        <Image src="/upload.png" alt="" width={28} height={28} />
                        <span>Tải lên ảnh</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors.img?.message && (
                        <p className="text-xs text-red-400">{errors.img.message.toString()}</p>
                    )}
                </div>
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default StudentForm 
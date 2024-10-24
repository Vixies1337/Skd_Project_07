import EventCalendar from "@/components/EventCalendar"
import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalender"

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
    {/* LEFT */}
    <div className="w-full xl:2/3">
    <div className="h-full bg-white p-4 rounded-md">
      <h1 className="text-xl font-semibold">Lịch học (D101K13)</h1>
      <BigCalendar/>
    </div>
    </div>


    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <EventCalendar/>
      <Announcement/>
      </div>
    </div>
  )
}

export default StudentPage
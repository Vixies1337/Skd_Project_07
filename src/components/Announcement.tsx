const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Thông báo</h1>
        <span className="text-xs text-gray-400">Hiển thị tất cả</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-PYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Bạn có một lịch thi!</h2>
            <span className="text-xs text-gray-400 bg-white rounded -md px-1 py-1">28-12-2024</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Nhớ chuẩn bị bài thật kỹ nhé love love!</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-PPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Nộp bài tập ngày cuối kỳ</h2>
            <span className="text-xs text-gray-400 bg-white rounded -md px-1 py-1">28-12-2024</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Nộp bài cuối kỳ vào email</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-PYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lịch test, nếu có 100k</h2>
            <span className="text-xs text-gray-400 bg-white rounded -md px-1 py-1">28-12-2024</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">100k cho những ai tìm được lỗi kkkk</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

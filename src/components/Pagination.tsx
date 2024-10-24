const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button
                disabled
                className="py-2 px-4 rounded-md border border-gray-300 bg-state-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Trang trước
            </button>
            <div className="flex items-center gap-2 text-sm">
                <button className="px-2 rounded-sm border border-gray-300 bg-PCyan">
                    1
                </button>
                <button className="px-2 rounded-sm border border-gray-300">
                    2
                </button>
                <button className="px-2 rounded-sm border border-gray-300">
                    3
                </button>
                ...
                <button className="px-2 rounded-sm border border-gray-300">
                    10
                </button>
            </div>
            <button
                className="py-2 px-4 rounded-md border border-gray-300 bg-state-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Trang sau
            </button>
        </div>
    );
};

export default Pagination;

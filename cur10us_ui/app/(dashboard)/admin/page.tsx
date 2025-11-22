import UserCard from "@/components/UserCard"
import CountCharts from "@/components/CountCharts"

const AdminPage = () =>{
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* User cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="students" />
                    <UserCard type="teachers" />
                    <UserCard type="parents" />
                    <UserCard type="staffs" />
                </div>
                {/* Middle Charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                        {/* Count charts */}
                        <div className="w-full lg:w-1/3 h-[450px]">
                            <CountCharts />
                        </div>
                        {/* Attendance charts */}
                        <div className="w-full lg:w-2/3 h-[450px]"></div>
                </div>
                {/* Bottom Char */}
                <div className=""></div>
            </div>
            <div className="w-full lg:w-1/3">
                R
            </div>
        </div>
    )
}

export default AdminPage
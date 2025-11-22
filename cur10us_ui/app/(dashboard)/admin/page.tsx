import UserCard from "@/app/components/UserCard"
import CountCharts from "@/app/components/CountCharts"
import AttendanceChart from "@/app/components/AttendanceChart"
import FinanceChart from "@/app/components/FinanceChart"
import EventCalendar from "@/app/components/EventCalendar"
import Announcements from "@/app/components/Announcements"

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
                        <div className="w-full lg:w-2/3 h-[450px]">
                            <AttendanceChart />
                        </div>
                </div>
                {/* Bottom Chart */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage
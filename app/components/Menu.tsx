import Link from "next/link"
import Image from "next/image"
import { role } from "@/lib/data"

const menuItems = [
    {
        title: "Menu",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/teachers",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/student.png",
                label: "Student",
                href: "/students",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/parent.png",
                label: "parents",
                href: "/parent",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/lessons",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/exam.png",
                label: "Exam",
                href: "/exams",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/assignments",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/result.png",
                label: "Result",
                href: "/results",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/attendance",
                visible: ["admin", "teacher", "student", "parent"]
            },
            // {
            //     icon: "/event.png",
            //     label: "Event",
            //     href: "/events",
            //     visible: ["admin", "teacher", "student", "parent"]
            // },
            {
                icon: "/message.png",
                label: "Message",
                href: "/messages",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/announcement.png",
                label: "Announcement",
                href: "/announcements",
                visible: ["admin", "teacher", "student", "parent"]
            },
        ]
    },
    {
        title: "OTHER",
        items:[
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"]
            },
        ]
    }
]



const Menu = () =>{
    return (
        <div className="mt-4 text-sm">
            {menuItems.map(i=>(
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                    {i.items.map((item)=>{
                        if (item.visible.includes(role)){
                            return(
                                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md md:px-2 hover:bg-[#c3ebfa]">
                                    <Image src={item.icon} height={20} width={20} alt=""/>
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default Menu
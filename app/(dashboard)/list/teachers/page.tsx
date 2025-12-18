import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import TableSearch from "@/app/components/TableSearch"
import Image from "next/image"

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    foto: string;
    phone: string;
    subject: string[];
    classes: string;
    address: string;
}

const columns = [
    {
        header: "Info", accessor: "info"
    },
    {
        header: "Teacher ID", accessor: "teacher-id", className: "hidden md:table-cell",
    },
    {
        header: "Subjects", accessor: "subjects", className: "hidden md:table-cell",
    },
    {
        header: "Classes", accessor: "classes", className: "hidden md:table-cell",
    },
    {
        header: "Phone", accessor: "phone", className: "hidden lg:table-cell",
    },
    {
        header: "Address", accessor: "address", className: "hidden lg:table-cell",
    },
    {
        header: "Actions", accessor: "actions", className: "hidden lg:table-cell",
    },
]

const renderRow = (items: Teacher) => {
    <tr>
        <td>
            <Image src={items.phone} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
                <h3 className="font-semibold">{items.name}</h3>
                <h3 className="text-xs text-gray-500">{items.email}</h3>
                <h3>{items.name}</h3>
            </div>
        </td>
        <td>{items.teacherId}</td>
        <td>{items.subject}</td>
        <td>{items.classes.join(",")}</td>
        <td>{items.phone}</td>
        <td>{items.address}</td>
        {/* <td>{items.acttion}</td> */}

    </tr>
}

const TeacherListPage = () => {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* Top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f6ed78ff]">
                            <Image src="/filter.png" width={14} height={14} alt=""></Image>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f6ed78ff]">
                            <Image src="/sort.png" width={14} height={14} alt=""></Image>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f6ed78ff]">
                            <Image src="/plus.png" width={14} height={14} alt=""></Image>
                        </button>
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} />
            <div className=""></div>
            {/* Pagination */}
            <Pagination />
            <div className=""></div>
        </div>
    )
}

export default TeacherListPage
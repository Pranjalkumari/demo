import TableSearch from "@/components/TableSearch"
import Image from "next/image";
const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1  m-4 mt-0">
        {/* Top */}
        <div className="flex items-center justify-between">
            <h1 className=" hidden md:block text-lg font-semibold">ALl Teachers</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 bg-red-200 w-full md:w-auto">
                <TableSearch/>
          
             <div>
                   <button>
                         <Image src= "/filter.png " alt="" width={14} height={14} />
                   </button>
             </div>
            </div>
        </div>
         {/* List*/}
         <div className=""></div>
          {/* Pagination */}
        <div className=""></div>
    </div>
  )
}

export default TeacherListPage
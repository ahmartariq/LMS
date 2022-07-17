import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { data } from '../Assets/Data/data'


export const StudentListing = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);

    const handleSearch = event => {
        setSearch(event.target.value)
    }

    const filter = () => {
        setFilterData(data.filter(item => item.studentId == search || item.studentName.includes(search) || item.email.includes(search) || item.program.includes(search)))
    }

    const visit = (event) => {
        const id = event.target.parentNode.childNodes[0].innerHTML
        navigate(`/program-details/${id}`);
    }

    return (
        <div className="min-h-full w-full flex justify-center py-12">
            <div className="w-5/6 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center pb-10 primary-color">Student List</h1>
                <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text" value={search} onChange={handleSearch} placeholder="Search Student" onKeyUp={filter} />
                <table className="table-auto w-full text-sm text-left text-white mt-12 table-bordered" style={{ border: "1px #3596C1 solid" }}>
                    <thead className="text-xs primary-bg uppercase ">
                        <tr>
                            <th scope="col" className="py-3 px-6">Student Id</th>
                            <th scope="col" className="py-3 px-6">Student Name</th>
                            <th scope="col" className="py-3 px-6">Email</th>
                            <th scope="col" className="py-3 px-6">Program name</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {
                            filterData.length === 0 && search.length === 0 ?
                                data.map((person) => (
                                    <tr key={person.studentId}>
                                        <th scope="row" className="py-4 px-6">
                                            {person.studentId}
                                        </th>
                                        <td className="py-4 px-6">
                                            {person.studentName}
                                        </td>
                                        <td className="py-4 px-6">
                                            {person.email}
                                        </td>
                                        <td className="py-4 px-6 cursor-pointer  hover:text-gray-700 hover:underline" onClick={visit}>
                                            {person.program}
                                        </td>
                                    </tr>
                                ))
                                :
                                filterData.map((person) => (
                                    <tr key={person.studentId}>
                                        <th scope="row" className="py-4 px-6">
                                            {person.studentId}
                                        </th>
                                        <td className="py-4 px-6">
                                            {person.studentName}
                                        </td>
                                        <td className="py-4 px-6">
                                            {person.email}
                                        </td>
                                        <td className="py-4 px-6 cursor-pointer  hover:text-gray-700 hover:underline" onClick={visit}>
                                            {person.program}
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
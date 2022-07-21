import { useParams } from "react-router-dom"
import { files } from '../Assets/Data/files'
import { modules } from "../Assets/Data/modules";



export const Files = () => {
    const { module } = useParams();

    const found = modules.find((mod) => {
        if (module === mod.name) return mod;
    });

    if ((found.name.toLowerCase().includes("observation activity") || found.name.toLowerCase().includes("observation-activity") ||
     found.name.toLowerCase().includes("workplace project") ||found.name.toLowerCase().includes("workplace-project") ||  found.name.toLowerCase().includes("supplementary") || 
     found.name.toLowerCase().includes("timesheet") || found.name.toLowerCase().includes("additional evidence") || found.name.toLowerCase().includes("additional-evidence")) && 
     found.status.toLocaleLowerCase() !== "waiting"){
        return (
            <div className="min-h-full w-full flex items-center justify-center py-8">
                <div className="w-5/6 flex flex-col items-center justify-center">
                    <table className="table-auto w-full text-sm text-left text-white mt-12 table-bordered" style={{ border: "1px #3596C1 solid" }}>
                        <thead className="text-xs primary-bg">
                            <tr>
                                <th scope="col" className="py-3 px-6">File Name</th>
                                <th scope="col" className="py-3 px-6">Uploaded By</th>
                                <th scope="col" className="py-3 px-6">Date</th>
                                <th scope="col" className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-black">
                            {
                                files.map((file) => (
                                    <tr key={file.name}>
                                        <th scope="row" className="py-4 px-6">
                                            {file.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {file.uploadedby}
                                        </td>
                                        <td className="py-4 px-6">
                                            {file.date}
                                        </td>
                                        <td className="py-4 px-6 cursor-pointer ">
                                            <button link={file.link} className="navButton" >Download</button>
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
    else{
        return(

            <div className="container flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold text-4xl primary-color">Files Tab</h1>
        <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 justify-center items-center shadow-lg">
          <h1 className="font-bold text-lg">You can not download any files</h1>
        </div>
      </div>
    )
    }
}
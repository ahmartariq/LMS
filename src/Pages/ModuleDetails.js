import { useParams, Outlet, useLocation, NavLink } from "react-router-dom";
import { modules } from "../Assets/Data/modules";
import { Navigation } from "./Navigation";


export const ModuleDetails = () => {
    const { module } = useParams();
    const location  = useLocation();


    const found = modules.find((mod) => {
        if (module === mod.name) {
            return mod;
        }
    });


    const LinkStyles = ({ isActive }) => {
        return{
            borderBottom: isActive ? "3px solid white" : 'none',
        }
    }

    const getLocation = () => {
        return location.pathname
    }

    return (
        <>
        <Navigation location={getLocation()}/>
        <div>
            <h1 className="font-bold text-4xl text-center pb-10 primary-color mt-12">Module Details</h1>
            <p className="text-lg text-center mb-5">
                    <span className="font-medium"> Module Name:</span> {found.name} |
                    <span className="font-medium"> Status:</span> {found.status} |
                    <span className="font-medium"> Start Date:</span> {found.startdate} |
                    <span className="font-medium"> End Date:</span> {found.enddate}
                    </p>

            <div className="container-fluid flex flex-row primary-bg py-4 px-2 space-x-20 justify-center text-white text-lg mb-5">
                <NavLink style={LinkStyles} className="moduleNav" to={`/module-details/${module}/questions`}>Question</NavLink> 
                <NavLink style={LinkStyles} className="moduleNav" to={`/module-details/${module}/feedback`}>Feedback</NavLink>
                <NavLink style={LinkStyles} className="moduleNav" to={`/module-details/${module}/files`}>Files</NavLink>
            </div>
            <Outlet />
        </div>
        </>
    );
};

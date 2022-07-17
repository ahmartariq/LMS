import { useParams, Outlet, Link } from "react-router-dom";
import { modules } from "../Assets/Data/modules";

export const ModuleDetails = () => {
    const { module } = useParams();

    const found = modules.find((mod) => {
        if (module === mod.name) {
            return mod;
        }
    });


    return (
        <div>
            <h1 className="primary-bg text-white text-4xl text-center font-bold pt-3 m-0">Module Tasks</h1>
            <div className="container-fluid flex flex-row primary-bg py-4 px-2 space-x-20 justify-center text-white text-lg">
                <Link className="text-white no-underline hover:text-gray-600" to={`/module-details/${module}/questions`}>Question</Link>
                <Link className="text-white no-underline hover:text-gray-600" to={`/module-details/${module}/feedback`}>Feedback</Link>
                <Link className="text-white no-underline hover:text-gray-600" to={`/module-details/${module}/files`}>Files</Link>
            </div>
            <Outlet />
        </div>
    );
};

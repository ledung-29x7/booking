import { Link } from "react-router-dom";

function AdminTask({ nameTask,icon,link }) {
    return (

        <Link to={link} className="box flex justify-center items-center w-full h-44"

        >
            <img src={icon} alt="" />
            <span className=" text-2xl font-bold">{nameTask}</span>
        </Link>

    );
}
export default AdminTask;
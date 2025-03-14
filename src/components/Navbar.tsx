import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <h1>Task Manager</h1>
                <div className="flex space-x-4">
                    <Link to="/">Tasks</Link>
                    <Link to="/users">Users</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
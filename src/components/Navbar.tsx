import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-white text-black">
                <h1>Task Manager</h1>
                <div className="flex space-x-4">
                    <Link to="/">Tasks</Link>
                    <Link to="/users">Users</Link>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
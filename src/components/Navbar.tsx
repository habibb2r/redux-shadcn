import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 shadow-md shadow-neutral">
                <div className="flex items-center gap-2 rounded-4xl shadow-xl shadow-accent p-3">
                    <img className="h-[50px]" src={logo} alt="" />
                    <h1 className="text-2xl">Task Manager</h1>
                </div>
                <div className="flex items-center space-x-5">
                    <Link className="font-semibold" to="/">Tasks</Link>
                    <Link className="font-semibold" to="/users">Users</Link>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
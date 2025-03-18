import { AddUsers } from "@/components/modules/AddUsers";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { FaTrashCan } from "react-icons/fa6";


const Users = () => {
    const users = useAppSelector(selectUsers);
    console.log(users);
    return (
        <div>
            <div className="flex justify-between items-center p-4">
                <h1 className="font-bold text-4xl">Users</h1>
                <AddUsers></AddUsers>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map((user)=> <div className="flex justify-between items-center p-4 shadow-md shadow-accent rounded-md" key={user.id}>
                        <h1 className="capitalize text-3xl font-semibold">{user.name}</h1>
                        <FaTrashCan className="text-3xl" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;
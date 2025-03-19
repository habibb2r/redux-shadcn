import { AddUsers } from "@/components/modules/AddUsers";
import { removeUsers, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaTrashCan } from "react-icons/fa6";


const Users = () => {
    const users = useAppSelector(selectUsers);
    console.log(users);
    const dispatch = useAppDispatch()
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
                        <FaTrashCan onClick={()=>dispatch(removeUsers(user.id))} className="text-3xl" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;
import { selectFilters, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilters);
    console.log(tasks)
    console.log(filter)
    return (
        <div>
            This is task components
        </div>
    );
};

export default Tasks;
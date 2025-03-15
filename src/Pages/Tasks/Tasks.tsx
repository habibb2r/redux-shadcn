import TaskCard from "@/components/modules/TaskCard";
import { selectFilters, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilters);
    console.log(tasks)
    console.log(filter)
    return (
        <div>
            <h1 className="font-bold text-4xl text-center">Tasks</h1>
            <div className="p-5">
                {
                    tasks.map((task) => <TaskCard task={task} />)
                }
            </div>
        </div>
    );
};

export default Tasks;
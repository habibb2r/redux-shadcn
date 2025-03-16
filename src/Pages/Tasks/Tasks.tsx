import { AddTaskModal } from "@/components/modules/AddTaskModal";
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
            <div className="flex justify-between items-center p-4 ">
            <h1 className="font-bold text-4xl ">Tasks</h1>
            <AddTaskModal />
            </div>
            <div className="p-5">
                {
                    tasks.map((task) => <TaskCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default Tasks;
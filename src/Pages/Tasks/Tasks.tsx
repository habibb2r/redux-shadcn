import { AddTaskModal } from "@/components/modules/AddTaskModal";
import TaskCard from "@/components/modules/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectFilters, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilters);
  console.log(tasks);
  console.log(filter);

  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="flex justify-between items-center p-4 ">
        <h1 className="font-bold text-4xl ">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={()=> dispatch(updateFilter("All")) } value="All">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("High")) } value="High">High</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("Medium")) } value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("Low")) } value="Low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="p-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;


import { cn } from '@/lib/utils';
import { deleteTask, toogleCompletedTask } from '@/redux/features/task/taskSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ITask } from '@/types/types';
import { FaTrashCan } from 'react-icons/fa6';
import { Checkbox } from '../ui/checkbox';


interface IProps{
    task: ITask;
}



const TaskCard = ({task}: IProps) => {

    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-between items-start gap-5 p-4 shadow-md shadow-accent">
                    <div className="flex flex-col justify-start items-start gap-4">
                    <div className='flex items-center gap-3'>
                        <div className={cn('size-3.5 rounded-full', {
                            'bg-green-700': task.priority == "Low",
                            'bg-yellow-500': task.priority == "Medium",
                            'bg-red-700': task.priority == "High"
                        } )}></div>
                        <h1  className={cn("font-bold text-3xl", {"line-through" : task.isCompleted })}>{task.title}</h1>
                    </div>
                    <p>{task.description}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                    <FaTrashCan onClick={()=>dispatch(deleteTask(task.id))} className="text-3xl" />
                    <Checkbox onClick={()=>dispatch(toogleCompletedTask(task.id))} />
                    </div>
                </div>
    );
};

export default TaskCard;
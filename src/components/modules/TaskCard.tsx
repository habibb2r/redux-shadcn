
import { cn } from '@/lib/utils';
import { ITask } from '@/types/types';
import { FaTrashCan } from 'react-icons/fa6';
interface IProps{
    task: ITask;
}

const TaskCard = ({task}: IProps) => {
    return (
        <div className="flex justify-between items-start gap-5 p-4 shadow-md shadow-accent">
                    <div className="flex flex-col justify-start items-start gap-4">
                    <div className='flex items-center gap-3'>
                        <div className={cn('size-3.5 rounded-full', {
                            'bg-green-500': task.priority == "Low",
                            'bg-yellow-500': task.priority == "Medium",
                            'bg-red-500': task.priority == "High"
                        } )}></div>
                        <h1 className="font-bold text-2xl">{task.title}</h1>
                    </div>
                    <p>{task.description}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                    <FaTrashCan className="text-3xl" />
                    <input type="checkbox" name="" id="" />
                    </div>
                </div>
    );
};

export default TaskCard;
import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: "All" | "High" | "Low" | "Medium";
}

const initialState : InitialState = {
 tasks:[
    {
        id: "113",
        title: "Learn Redux",
        description: "Learn Redux with Redux Toolkit",
        isCompleted: false,
        priority: "Low",
        dueDate : "2025-03-20",
     },
    {
        id: "114",
        title: "Learn Next js",
        description: "Learn Next js with Redux Toolkit",
        isCompleted: false,
        priority: "High",
        dueDate : "2025-03-26",
     }
 ],
 filter: "All",

}

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData
    }
}
const todoSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) =>{
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },

        toogleCompletedTask: (state, action: PayloadAction<string>) =>{
            state.tasks.forEach(task=> task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },

        deleteTask: (state, action: PayloadAction<string>) =>{
            state.tasks = state.tasks.filter(task=> task.id !== action.payload);
        },
        updateFilter: (state, action: PayloadAction<"All" | "High" | "Low" | "Medium">) =>{
            state.filter = action.payload;
        }
    }
})

export const selectTasks = (state: RootState)=>{
    return state.todo.tasks;
}
export const selectFilters = (state: RootState)=>{
    return state.todo.filter;
}

export const { addTask, toogleCompletedTask ,deleteTask} = todoSlice.actions; 

export default todoSlice.reducer;
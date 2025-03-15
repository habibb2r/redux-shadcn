import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

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
const todoSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState)=>{
    return state.todo.tasks;
}
export const selectFilters = (state: RootState)=>{
    return state.todo.filter;
}

export default todoSlice.reducer;
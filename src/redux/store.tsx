import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import todoReducer from './features/task/taskSlice'
import userReducer from './features/user/userSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        userList: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
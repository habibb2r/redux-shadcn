import { RootState } from "@/redux/store";
import { IUser } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    users: IUser[];
   
}
const initialState: InitialState = {
    users: []
}


type DraftUser = Pick<IUser, "name">;
const createUser = (userData: DraftUser): IUser => {
    return {
        id: nanoid(),
        ...userData,
    }
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<IUser>) => {
            console.log(action.payload)
           const user = createUser(action.payload);
              state.users.push(user);
        },
        removeUsers: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },
})

export const selectUsers = (state: RootState)=>{
    return state.userList.users;
}

export const { addUsers,removeUsers} = userSlice.actions
export default userSlice.reducer;
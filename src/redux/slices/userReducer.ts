import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInterface, UsersState } from '../../models/UserInterface';

const initialState: UsersState = {
  listUsers: []
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInterface>) {
      const { payload: user } = action
      state.listUsers.push(user)
    }
  },
})

export const { addUser } = userReducer.actions;

export default userReducer.reducer;
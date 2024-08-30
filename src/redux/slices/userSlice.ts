import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInterface, UsersState } from '../../models/UserInterface';

const initialState: UsersState = {
  listUsers: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInterface>) {
      const { payload: user } = action
      state.listUsers.push(user)
    }
  },
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
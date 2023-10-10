import { createSlice } from '@reduxjs/toolkit'
export interface IUser {
  user: { phoneNumber: string; token: string }
}
const initialState: IUser = {
  user: { phoneNumber: '', token: '' },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {},
})

export default authSlice.reducer

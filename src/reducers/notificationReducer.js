import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    createNotification(state, action) {
      return action.payload
    },
    deleteNotification(state, action) {
      return ""
    },
  },
})

export const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch(createNotification(message))
    setTimeout(() => {
      dispatch(deleteNotification())
    }, time * 1000)
  }
}

export const { createNotification, deleteNotification } =
  notificationSlice.actions
export default notificationSlice.reducer

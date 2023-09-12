import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter(state, action) {
      return action.payload
    },
  },
})

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "SET_FILTER":
//       return action.filter
//     default:
//       return state
//   }
// }

// export const changeFilter = (filter) => {
//   return {
//     type: "SET_FILTER",
//     filter,
//   }
// }

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer

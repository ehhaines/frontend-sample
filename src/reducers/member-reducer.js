import membersArray from "../List/members.json";
import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: membersArray,
  reducers: {
    addMember(state, action) {
      console.log(state)
      state.push(action.payload);
    }
  }
});

export const {
  addMember
} = memberSlice.actions;
export default memberSlice.reducer;
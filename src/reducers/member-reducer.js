import membersArray from "../List/members.json";
import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: membersArray,
  reducers: {
    addMember(state, action) {
      state.push(action.payload);
    },
    deleteMember(state, action) {
      const memberIndex = state.find(mem => mem.email !== action.payload.email);
      state.splice(memberIndex, 1);
    }
  }
});

export const {
  addMember,
  deleteMember
} = memberSlice.actions;
export default memberSlice.reducer;
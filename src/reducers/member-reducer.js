import membersArray from "../List/members.json";
import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: membersArray,
  reducers: {
    addMember(state, action) {
      if (!state.find(mem => mem.email === action.payload.email)) {
        state.push(action.payload);
      } else {
        alert("ERROR: Members must have unique email addresses!");
      }
    },
    deleteMember(state, action) {
      const memberIndex = state.findIndex(mem => mem.email === action.payload.email);
      state = state.splice(memberIndex, 1);
    },
    updateMember(state, action) {
      let currentMember = state.findIndex(mem => mem.email === action.payload[0].email);
      state[currentMember] = action.payload[1]
    }
  }
});

export const {
  addMember,
  deleteMember,
  updateMember
} = memberSlice.actions;
export default memberSlice.reducer;
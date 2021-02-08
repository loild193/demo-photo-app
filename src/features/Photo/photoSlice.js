const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    }
  }
})

const { actions, reducer } = photoSlice;
export const { addPhoto } = actions;
export default reducer;
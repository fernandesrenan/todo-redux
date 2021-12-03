import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

async function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayInms);
  });
}

export const addTodo = createAsyncThunk("todo/addTodo", async (text) => {
  await delay(2000);

  return { id: nanoid(), text, checked: false };
});

export const toggleTodo = createAsyncThunk("todo/toggleTodo", async (id) => {
  await delay(2000);

  return id;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(toggleTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.loading = false;
        const todo = state.list.find((todo) => todo.id === action.payload);
        todo.checked = !todo.checked;
      }),
});

export default todoSlice.reducer;

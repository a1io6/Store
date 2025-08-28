import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// thunk для входа
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://689ead013fed484cf877ace7.mockapi.io/users");
      const users = res.data;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      } else {
        return rejectWithValue("Неверный email или пароль");
      }
    } catch (err) {
      return rejectWithValue("Ошибка сервера");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBrands, getSneakerById, getSneakers } from "./ShoeService";

const initialState = {
  shoes: [],
  brands: [],
  shoe: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const getShoes = createAsyncThunk(
  "shoes/getAll",
  async (gender, thunkAPI) => {
    try {
      return await getSneakers(gender);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getShoeBrands = createAsyncThunk(
  "shoes/getBrands",
  async (_, thunkAPI) => {
    try {
      return await getBrands();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleShoe = createAsyncThunk(
  "shoes/getSingleShoe",
  async (id, thunkAPI) => {
    try {
      return await getSneakerById(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShoes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shoes = action.payload;
      })
      .addCase(getShoes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getShoeBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShoeBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getShoeBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleShoe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleShoe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shoe = action.payload;
      })
      .addCase(getSingleShoe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = shoeSlice.actions;
export default shoeSlice.reducer;

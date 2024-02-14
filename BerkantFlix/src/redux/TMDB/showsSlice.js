import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = import.meta.env.VITE_APP_API_URL;

const initialState = {
  popularShows: [],
};

export const fetchAPIData = async (endPoint) => {
  const res = await axios.get(
    `${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = res.data;
  return data;
};

export const getPopularShows = createAsyncThunk('getPopularShows', async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = res.data;
  return data.results;
});

export const showsSlice = createSlice({
  name: 'popularShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularShows.pending, () => {
        console.log('Pending');
      })
      .addCase(getPopularShows.fulfilled, (state, { payload }) => {
        console.log('Fetch Success');
        state.popularShows = payload;
        console.log(payload);
      })
      .addCase(getPopularShows.rejected, () => {
        console.log('Rejected');
      });
  },
});

export default showsSlice.reducer;
export const getPopularShowsData = (state) => state.popularShows.popularShows;

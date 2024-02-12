import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchAPIData from '../../endPoint';

const initialState = {
  popularMovies: [],
};

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = res.data;
    return data.results;
  }
);

export const tmdbApiSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, () => {
        console.log('Pending');
      })
      .addCase(getPopularMovies.fulfilled, (state, { payload }) => {
        console.log('Fetch Success');
        state.popularMovies = payload;
      })
      .addCase(getPopularMovies.rejected, () => {
        console.log('Rejected');
      });
  },
});

export default tmdbApiSlice.reducer;
export const getPopularMoviesData = (state) =>
  state.popularMovies.popularMovies;

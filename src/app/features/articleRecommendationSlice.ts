import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../services/services";
import { IArticle } from "../../types";

interface ArticleState {
  articles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticlesRecommendations = createAsyncThunk<
  IArticle[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    return await spaceFlyAPI.getArticlesRecommendations();
  } catch (error) {
    const AxiosError = error as AxiosError;
    return rejectWithValue(AxiosError.message);
  }
});

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticlesRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticlesRecommendations.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticlesRecommendations.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articleSlice.reducer;

export { fetchArticlesRecommendations };
import {IPost} from '../../models/IPost';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from './actionCreaters';

interface PostState{
  posts: IPost[],
  isLoading: boolean,
  error: string,
}

const initialState:PostState={
  posts:[],
  isLoading: false,
  error:'',
}

export const postsSlice = createSlice({
  name:'posts',
  initialState,
  reducers:{
    addPost(state, action) {
      state.posts.unshift(action.payload);
    },
    removePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    toggleLike(state, action) {
      const toggledPost = state.posts.find(
        (post) => post.id === action.payload
      );
      if(toggledPost){
        toggledPost.liked = !toggledPost.liked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending,(state)=>{
        state.isLoading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action:any)=>{
      state.isLoading = false;
      state.error = action.payload;
    })
  },
}) 

export const {addPost, removePost,toggleLike} = postsSlice.actions;
export default postsSlice.reducer;
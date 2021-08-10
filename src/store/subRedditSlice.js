import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getFailedSubreddits(state) {
            state.isLoading = false;
            state.error = true;
        },

    },
});

export const {
    getFailedSubreddits,
    getSubredditSuccess,
    startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducers;


// redux thunk that gets subreddits.

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditSuccess(subreddits));
    } catch (error) {
        dispatch(getFailedSubreddits());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
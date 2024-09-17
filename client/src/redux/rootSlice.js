import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false
    },
    reducers: { // Fixed the property name to 'reducers'
        ShowLoading: (state) => {
            state.loading = true;
        },
        HideLoading: (state) => {
            state.loading = false;
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) =>{
            state.reloadData = action.payload;
        }
    }
});

export default rootSlice.reducer; // Export the reducer function
export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } = rootSlice.actions; // Export the actions

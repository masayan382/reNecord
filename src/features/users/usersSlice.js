import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        isSignedIn: false,
        uid: "",
        username: "",
    },
    reducers: {
        signInAction: (state, action) => {
            return {
                ...state,
                isSignedIn: true,
                ...action.payload,
            };
        },
        signOutAction: () => {
            return {
                isSignedIn: false,
                uid: "",
                username: "",
            };
        },
    },
});

export const { signInAction, signOutAction } = usersSlice.actions;

export const signIn = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn;

        if (!isSignedIn) {
            const url = "https://api.github.com/users/masayan382";
            const response = await fetch(url)
                .then((res) => res.json())
                .catch(() => null);
            const username = response.login;
            dispatch(
                signInAction({
                    isSignedIn: true,
                    uid: "0001",
                    username: username,
                })
            );
        }
    };
};

export const getUserId = (state) => state.users.uid;
export const getUserName = (state) => state.users.username;

export default usersSlice.reducer;

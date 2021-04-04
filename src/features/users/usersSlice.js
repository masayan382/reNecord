import { createSlice } from "@reduxjs/toolkit";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

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

export const SignUpFb = (username, email, password, confirmPassword) => {
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const goHome = () => {
    //     history.push("/");
    // };
    console.log("1");
    return async (dispatch) => {
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("必須項目が未入力です");
            return false;
        }
        if (password !== confirmPassword) {
            alert("パスワードが一致しません");
            return false;
        }
        console.log("2");
        return auth.createUserWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;
            console.log("user:", user);

            if (user) {
                console.log("user");
                const uid = user.uid;
                console.log("uid:", uid);
                const timestamp = FirebaseTimestamp.now();
                const userInitialData = {
                    created_at: timestamp,
                    email: email,
                    uid: uid,
                    updated_at: timestamp,
                    username: username,
                };
                db.collection("user")
                    .doc(uid)
                    .set(userInitialData)
                    .then(() => {
                        console.log("userInitialData:", userInitialData);
                        // dispatch(goHome());
                    });
            }
        });
    };
};

export const getUserId = (state) => state.users.uid;
export const getUserName = (state) => state.users.username;

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";
// import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

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

export const SignInFb = (email, password) => {
    return async (dispatch) => {
        if (email === "" || password === "") {
            alert("必須項目が未入力です");
            return false;
        }
        console.log("1");
        await auth.signInWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;

            if (user) {
                const uid = user.uid;
                db.collection("users")
                    .doc(uid)
                    .get()
                    .then((snapshot) => {
                        const data = snapshot.data();
                        dispatch(
                            signInAction({
                                isSignedIn: true,
                                uid: uid,
                                username: data.username,
                            })
                        );
                    });
                dispatch(push("/"));
            }
        });
    };
};

export const SignUpFb = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("必須項目が未入力です");
            return false;
        }
        if (password !== confirmPassword) {
            alert("パスワードが一致しません");
            return false;
        }
        return auth.createUserWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;

            if (user) {
                const uid = user.uid;
                const timestamp = FirebaseTimestamp.now();
                const userInitialData = {
                    created_at: timestamp,
                    email: email,
                    uid: uid,
                    updated_at: timestamp,
                    username: username,
                };
                db.collection("users")
                    .doc(uid)
                    .set(userInitialData)
                    .then(() => {
                        dispatch(push("/"));
                    });
            }
        });
    };
};

export const getUserId = (state) => state.users.uid;
export const getUserName = (state) => state.users.username;

export default usersSlice.reducer;

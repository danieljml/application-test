import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  db,
  addDoc,
  collection
} from "../../firebase.config";
import { FIREBASE_ERRORS, WSREGEX } from "../constants";

const userSignup = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const wsName = name.replace(WSREGEX, "");
    await addDoc(collection(db, "posts", user.uid, "user-posts"));
    await updateProfile(auth.currentUser, {
      displayName: wsName
    }).catch((err) => console.log(err));
    return user;
  } catch (error) {
    console.log(error);
    return { code: 400, message: FIREBASE_ERRORS[error.code].message };
  }
};

const userSignin = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    return { code: 400, message: FIREBASE_ERRORS[error.code].message };
  }
};

const userLogout = async () => {
  try {
    await signOut(auth);
    console.log("sign out");
    localStorage.removeItem("user");
    window.location.href = "https://cvjpz3.csb.app/";
  } catch (error) {
    return { code: 400, message: FIREBASE_ERRORS[error.code].message };
  }
};

export { userSignup, userSignin, userLogout };

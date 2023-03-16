import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import "./styles/index.css";
import {
  FORM_CREATE_POST,
  BTN_CREATE_USER_POST,
  FORM_ERRORS,
  WSREGEX
} from "./constants";
import { handlerAnimation } from "./functions/index";

const userStored = localStorage.getItem("user");

const addUserPost = async ({ title, content, date }) => {
  if (userStored) {
    try {
      const user = JSON.parse(userStored);
      const { uid } = user;
      await addDoc(collection(db, "posts", uid, "user-posts"), {
        title: title.replace(WSREGEX, ""),
        content: content.replace(WSREGEX, ""),
        date: date.replaceAll("-", "/")
      });
      alert("Post created successfully");
      window.location.href = "https://cvjpz3.csb.app/user.html";
    } catch (error) {
      console.log(error);
    }
  }
};

const handlerFormData = (form) => {
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const formData = Object.fromEntries(new FormData(form).entries());
        const emptyInputs = Object.values(formData).some((item) => !item);

        if (emptyInputs) {
          throw FORM_ERRORS["inputs"];
        }

        addUserPost(formData);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    });
  }
};

handlerFormData(FORM_CREATE_POST);
handlerAnimation(BTN_CREATE_USER_POST, "mouseover");
handlerAnimation(BTN_CREATE_USER_POST, "mouseout");

import {
  FORM_SIGNUP,
  FORM_SIGNIN,
  FORM_ERRORS,
  BTN_SIGNIN,
  BTN_SIGNUP,
  BTN_SUBMIT_UP,
  BTN_SUBMIT_IN
} from "./constants";
import { userSignup, userSignin } from "./firebase/index";
import { handlerSignMethod, handlerAnimation } from "./functions/index";

const userStored = localStorage.getItem("user");

const handlerFormData = (form, signType) => {
  if (!userStored) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const formData = Object.fromEntries(new FormData(form).entries());
        const emptyInputs = Object.values(formData).some((item) => !item);

        if (emptyInputs) {
          throw FORM_ERRORS["inputs"];
        }
        if (
          form.getAttribute("id") === FORM_SIGNUP.getAttribute("id") &&
          formData.password !== formData.rpassword
        ) {
          console.log("Error ", formData.password, formData.rpassword);
          throw FORM_ERRORS["password"];
        }
        const user = await signType(formData);
        if (user.code === 400) {
          throw user;
        }
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "https://cvjpz3.csb.app/user.html";
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    });
  } else {
    window.location.href = "https://cvjpz3.csb.app/user.html";
  }
};

console.log(FORM_SIGNUP);
handlerSignMethod(BTN_SIGNIN, BTN_SIGNUP);
handlerSignMethod(BTN_SIGNUP, BTN_SIGNIN);
handlerFormData(FORM_SIGNUP, userSignup);
handlerFormData(FORM_SIGNIN, userSignin);
handlerAnimation(BTN_SUBMIT_UP, "mouseover");
handlerAnimation(BTN_SUBMIT_UP, "mouseout");
handlerAnimation(BTN_SUBMIT_IN, "mouseover");
handlerAnimation(BTN_SUBMIT_IN, "mouseout");

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import {
  LOGOUT_ICON,
  BTN_CREATE_POST,
  CONTAINER_POST,
  USER_TITLE,
  BTN_CHAT
} from "./constants";
import { userLogout } from "./firebase/index";

const userStored = localStorage.getItem("user");

const userData = async () => {
  if (USER_TITLE) {
    const user = JSON.parse(userStored);
    const { uid, displayName } = user;
    let content = `Bienvenido/a ${displayName}`;
    USER_TITLE.innerHTML += content;
    getUserData(uid);
  }
};

const getUserData = async (uid) => {
  let posts = [];
  const querySnapshot = await getDocs(
    collection(db, "posts", uid, "user-posts")
  );
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  if (posts.length) {
    const createUserPosts = posts
      .map((post, i) => {
        return `
      <div class="post">
        <div> 
          <i data-id=${i} class="post-icon bx bx-dots-vertical-rounded"></i>        
        </div>
        <p class="post__title">${post.title}</p>
        <span class="post__date">${post.date}</span>
        <p class="post__content">${post.content}</p>
      </div>`;
      })
      .join("");
    CONTAINER_POST.innerHTML = createUserPosts;
  }
};

if (CONTAINER_POST) {
  CONTAINER_POST.addEventListener("click", ({ target }) => {
    if (target.classList[0] === "post-icon") {
      console.log(target.parentNode.parentNode);
    }
  });
}

if (BTN_CREATE_POST) {
  BTN_CREATE_POST.addEventListener("click", () => {
    window.location.href = "https://cvjpz3.csb.app/create-post.html";
  });
}

if (LOGOUT_ICON) {
  LOGOUT_ICON.addEventListener("mouseover", (e) => {
    e.target.classList.add("animate__headShake");
  });
  LOGOUT_ICON.addEventListener("mouseout", (e) => {
    e.target.classList.remove("animate__headShake");
  });
  LOGOUT_ICON.addEventListener("click", () => userLogout());
}

if (userStored) {
  userData();
} else {
  window.location.href = "https://cvjpz3.csb.app/";
}

if (BTN_CHAT) {
  BTN_CHAT.addEventListener("click", () => {
    window.location.href = "https://cvjpz3.csb.app/chat.html";
  });
}

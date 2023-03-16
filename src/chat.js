import "./styles/index.css";
import { FORM_CHAT, CHAT_CONTAINER, WSREGEX } from "./constants";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../firebase.config";

const userStored = localStorage.getItem("user");
let messages = [];

const addMessage = async ({ content }) => {
  if (userStored) {
    try {
      const user = JSON.parse(userStored);
      const { uid, displayName } = user;
      await addDoc(collection(db, "messages"), {
        uid,
        name: displayName,
        content: content.replace(WSREGEX, ""),
        date: serverTimestamp()
      });
      getMessages();
      FORM_CHAT.reset();
    } catch (error) {
      console.log(error);
    }
  }
};

const getMessages = async () => {
  const user = JSON.parse(userStored);
  const { uid } = user;

  const q = query(collection(db, "messages"), orderBy("date"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    messages.push(doc.data());
  });

  const createUserMessages = messages
    .map((user) => {
      return `
    <li class=${user.uid === uid ? "sms__in" : "sms__ex"}>
      <div class="container__sms">
        <p>${user.name}</p>
        <span>${user.content}</span>
      </div>
    </li>`;
    })
    .join("");
  CHAT_CONTAINER.innerHTML += createUserMessages;
};

if (FORM_CHAT) {
  FORM_CHAT.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(FORM_CHAT).entries());
    formData.content = formData.content.replace(WSREGEX, "");
    addMessage(formData);
  });
}

getMessages();

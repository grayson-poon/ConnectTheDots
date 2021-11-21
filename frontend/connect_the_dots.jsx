import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

const preloadedState = {
  entities: {
    users: {
      1: { id: 1, email: "first@gmail.com", password: "password" },
      2: { id: 2, email: "second@gmail.com", password: "password" },
      3: { id: 3, email: "third@gmail.com", password: "password" },
      4: { id: 4, email: "fourth@gmail.com", password: "password" },
      5: { id: 5, email: "fifth@gmail.com", password: "password" },
    },
  },

  session: {
    currentUserId: null,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore(preloadedState);
  
  ReactDOM.render(<Root store={store}/>, root);
});
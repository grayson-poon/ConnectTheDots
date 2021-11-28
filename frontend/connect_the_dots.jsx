import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUserId) {
    preloadedState = {
      session: {
        currentUserId: window.currentUserId,
      }
    }

    delete window.currentUserId;
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById("root");

  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
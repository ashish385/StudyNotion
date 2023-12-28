import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux"
// import { store, persistor } from "./redux/store";

import { Toaster } from "react-hot-toast";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer";
// import { PersistGate } from "redux-persist/integration/react";



const store = configureStore({
  reducer:rootReducer,
})



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
//import the provider from react-redux
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
//store also needs to be imported
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

//wrap the entire app in the provider similiar to context
//you dont have to wrap the entire app, only components that need access to the store

//a store prop must be provided to point to the redux store
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

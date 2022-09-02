// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

//holds all of the the initial state values we will need throughout the program
const initialState = { counter: 0, showCounter: true };

//managing state using a slice created from the toolkit
const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		//it seems like we can mutate state here but only because redux toolkit uses immer in the background to automatically clone and reassign state values
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

//########## functionality without toolkit ##########

//reducer function for altering state throughout the program
// const counterReducer = (state = initialState, action) => {
//NEVER MUTATE THE STATE always use a function to return a new value
// if (action.type === "increment") {
// 	return {
//we must set the values of all state whenever we change one value to avoid state override
// 		counter: state.counter + 1,
// 		showCounter: state.showCounter,
// 	};
// }

// if (action.type === "increase") {
// 	return {
//allows us to increment by the amount passed in the action
// 		counter: state.counter + action.amount,
// 		showCounter: state.showCounter,
// 	};
// }

// if (action.type === "decrement") {
// 	return {
// 		counter: state.counter - 1,
// 		showCounter: state.showCounter,
// 	};
// }

// if (action.type === "toggle") {
// 	return {
//allows us to set state to the inverse of the current state value
// 		showCounter: !state.showCounter,
// 		counter: state.counter,
// 	};
// }

// return state;
// };

//creates redux store
// const store = createStore(counterReducer);

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

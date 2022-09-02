import { createStore } from "redux";

//reducer function for altering state throughout the program
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

//creates redux store
const store = createStore(counterReducer);

export default store;

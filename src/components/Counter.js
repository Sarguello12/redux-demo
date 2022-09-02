//useSelector custom redux hook allows us to access the state within a store
import { useSelector, useDispatch, connect } from "react-redux";

//allows use to connect to our redux store in class based components
import { Connect } from "react-redux";
import { Component } from "react";
import classes from "./Counter.module.css";

// const Counter = () => {
//returns a function that we can dispatch against our redux store
// const dispatch = useDispatch();

//allows to connect to individual state values within our redux store
//automatically subscribes us to the redux store
// const counter = useSelector((state) => state.counter);

// const incrementHandler = () => {
//use the dispatch function to dispatch a new action object
// 		dispatch({ type: "increment" });
// 	};

// 	const decrementHandler = () => {
// 		dispatch({ type: "decrement" });
// 	};

// 	const toggleCounterHandler = () => {};

// 	return (
// 		<main className={classes.counter}>
// 			<h1>Redux Counter</h1>
// 			<div className={classes.value}>{counter}</div>
// 			<div>
// 				<button onClick={incrementHandler}>Increment</button>
// 				<button onClick={decrementHandler}>Decrement</button>
// 			</div>
// 			<button onClick={toggleCounterHandler}>Toggle Counter</button>
// 		</main>
// 	);
// };

// export default Counter;

class Counter extends Component {
	incrementHandler() {
		this.props.increment();
	}
	decrementHandler() {
		this.props.decrement();
	}
	toggleCounterHandler() {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		);
	}
}

// provides the same functionality as useSelector
const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

//provides the same functionality as useDispatch
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: "increment" }),
		decrement: () => dispatch({ type: "decrement" }),
	};
};

//connect is a higher order component once executed returns a function and we pass our Counter as an arguement
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

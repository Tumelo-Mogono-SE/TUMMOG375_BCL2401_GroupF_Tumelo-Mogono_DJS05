import { dispatch, subscribe, getState } from "./store.js";
import { addAction, subtractAction, resetAction } from "./action.js";

/**
 * Logs state changes.
 *
 * @param {Object} prev - The previous state.
 * @param {Object} current - The current state.
 */
const logStateChanges = (prev, current) => {
    console.log("Previous state:", prev);
    console.log("Current state:", current);
}

console.log("Initial state value is:", getState().value);

/**
 * Subscribes to state changes and logs them.
 * 
 * @function
 * @param {Function} logStateChanges - The function to call when the state changes.
 */
subscribe(logStateChanges);

/**
 * Dispatches an add action to the store.
 * @function
 * @param {Function} addAction - The action parameter function for adding.
 */
dispatch(addAction());
/**
 * Dispatches an add action to the store.
 * @function
 * @param {Function} addAction - The action parameter function for adding.
 */
dispatch(addAction());

console.log("State after ADD action, value is:",getState().value);

/**
 * Dispatches an add action to the store.
 * @function
 * @param {Function} subtractAction - The action parameter function for subtracting.
 */
dispatch(subtractAction());

console.log("State after Substract action, value is:", getState().value);

/**
 * Dispatches an add action to the store.
 * @function
 * @param {Function} resetAction - The action parameter function for resetting.
 */
dispatch(resetAction());

console.log("State after RESET action, value is:", getState().value); 
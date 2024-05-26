import { state } from "./store.js";

/**
 * Action type for adding.
 * @constant
 * @type {string}
 */
export const ADD = "ADD";

/**
 * Action type for subtracting.
 * @constant
 * @type {string}
 */
export const SUBTRACT = "SUBTRACT";

/**
 * Action type for resetting.
 * @constant
 * @type {string}
 */
export const RESET = "RESET";

/**
 * Incrementing the value in the current state.
 * @returns {Object} A new state object with an incremented value.
 */
export const addAction = () => {
    return {type: ADD};
};

/**
 * Decrementing the value in the current state.
 * @returns {Object} A new state object with a decremented value.
 */
export const subtractAction = () => {
    return { type: SUBTRACT };
};

/**
 * Resetting the state to its initial value.
 * @returns {Object} The initial state object.
 */
export const resetAction = () => {
    return { type: RESET };
};

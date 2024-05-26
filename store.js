import { initialState } from  "./initialState.js";
import { reducer } from "./reducer.js";

/**
 * The current state object
 * @type {Object}
 */
export let state = initialState;

/**
 * An array to hold observer functions (subscribers)
 * @type {Array<Function>}
 */
export const subscribers = [];

/**
 * Dispatch a function to update the state by calling an action creator and notifying all subscribers
 * @param {Function} action - Execute the action function and get the next state
 * @returns {void}
 */
export const dispatch = (action) => {
    const prev = state;

    // Update state using the reducer function
    state = reducer(state, action);

    // Notify all subscribers of the state changes
    subscribers.forEach((notify) => notify(prev, state));
};

/**
 * A function to register an observer function that will be called on state changes
 * @param {Function} notify - The callback function to be called on state changes.
 * @returns {Function} The unsubscribe function.
 */
export const subscribe = (notify) => {
    subscribers.push(notify);

    // Unsubscribe from state changes.
    const unsubscribe = () => {
        subscribers = subscribers.filter((current) => current !== notify);
    }

    //Return the unsubscribe function to remove current subscriber.
    return unsubscribe;
}

/**
 * 
 * @returns {Object} 
 */
export const getState = () => {
    return state;
}
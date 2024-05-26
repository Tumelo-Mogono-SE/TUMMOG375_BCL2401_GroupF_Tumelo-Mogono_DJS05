import { ADD, SUBTRACT, RESET } from "./action.js"
import { initialState } from "./initialState.js"

/**
 * Reducer function to handle actions and update the state.
 * 
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object containing the type.
 * @param {string} action.type - The type of the action being handled.
 * @returns {Object} The new state of the application.
 */
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                value: state.value + 1
            };
        case SUBTRACT:
            return {
                ...state,
                value: state.value - 1
            };
        case RESET:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
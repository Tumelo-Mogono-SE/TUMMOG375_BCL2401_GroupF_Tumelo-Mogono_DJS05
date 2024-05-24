import { ADD, SUBTRACT, RESET } from "./action.js"
import { initialState } from "./initialState.js"

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
import { dispatch, subscribe, getState } from "./store.js";
import { addAction, subtractAction, resetAction } from "./action.js";


const logStateChanges = (prev, current) => {
    console.log("Previous state:", prev);
    console.log("Current state:", current);
}


console.log("Initial state value is:", getState().value);
subscribe(logStateChanges)

dispatch(addAction());
dispatch(addAction());

console.log("State after ADD action, value is:",getState().value);

dispatch(subtractAction());

console.log("State after Substract action, value is:", getState().value);

dispatch(resetAction());

console.log("State after RESET action, value is:", getState().value); 
import { dispatch } from "./store.js";
import { addAction, subtractAction, resetAction, getState } from "./action.js";



getState();

dispatch(addAction());
dispatch(addAction());

getState();

dispatch(subtractAction());

getState();

dispatch(resetAction());

getState();
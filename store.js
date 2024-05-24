import { initialState } from  "./initialState.js";
import { reducer } from "./reducer.js";

export let state = initialState;

export const subscribers = [];

export const dispatch = (action) => {
    const prev = state;

    state = reducer(state, action);

    subscribers.forEach((notify) => notify(prev, state));
};

export const subscribe = (notify) => {
    subscribers.push(notify);

    const unsubscribe = () => {
        subscribers = subscribers.filter((current) => current !== notify);
    }

    return unsubscribe;
}
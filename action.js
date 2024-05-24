export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

export const addAction = () => {
    return {type: ADD};
};

export const subtractAction = () => {
    return { type: SUBTRACT };
};

export const resetAction = () => {
    return { type: RESET };
};

export const getState = () => {
    console.log(state.value);
}
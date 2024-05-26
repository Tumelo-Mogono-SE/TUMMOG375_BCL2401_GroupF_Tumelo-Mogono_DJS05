# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

In this challenge, We ventured into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Our primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, We will subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements
- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

# Project Process
* For this project after getting the initial folder repository from codespace. I firstly went back and rewatched the lecture video's to see how I can implement some of the work used in the lecture video's in my project.
* I then created a file called initialState to set my initial state for my tally app which is an object which contains the value zero.
* I then went on to create a file called action.js which will set the action's which are add, subtract and reset and then created function wich return object which set the type's which are the created variable's which are the actions.
* I then created another file which called reducer which will have the imported variables ad, subtract and reset from the action file and then imported the initialState object from the initialState file. I then created a function which takes in two parameters which are the state and action which currently the state will be the initialState, inside it I have switch statements which based on the type of action which I will get from the action function from the action fill will return the case which is true, the first case which returns the a coy of the current state object which I then increase the property of value of the state by one. The second case does a similar thing to that of the first case by instead decrease the property of value of the state copy by one and the last case which is reset returns a new state object copy of the initial state object and the default returns the state.
* I then created a file called store.js which has inside it the imported initialState object and the reducer function. I then assign the initial state object to a variable and create a subscriber variable which is an array. I then created a function which takes in a parameter called action, inside it I assign the initial state to the variable called previous and then the state variable gets the reducer function assinged to it with the state as the first argument and the parameter action as the second argument. I then iterate over the subscriber array calling each subscriber funtion with the previous and the new state, thus notifying the subscribers about the state changes. I then have a subscribe function whic takes the notify function as an argument and the notify function gets added to the subscribers array using the push method. Inside the function I then have the unsubscribe function which removes the notify function from th subscribers array, the subscribers gets assigned to it the new array that includes all current subscribers except the one passed to subscribe. I then return unsubscribe function so the caller can unsubscribe the notify function when needed.
* I then went on to import state from the store.js file in the action.js file so that I can create a function called getState which console logs the property of value inside the state object which is either the initialState or the updated copy state value.
* I then created my official script.js file which will be used for my tally app. I imported the dispatch function from the store.js file and imported the function's from the action.js file. Which I used to get the inital state using getState and then used dispatch for two increments passing addAction function as an argument and got the new state using getState. I then applied dispatch for decrement by passing substactAction as an argument and got the new state using getState. I then reset the state using dispatch and passing resetAction as an argument and got the new state using getState.
* I then re-adjusted the script.js file by then creating a function called logStateChanges which takes in two arguments previous and current which are console logged inside the function and this function is used as the notify function inside the subscribe function. I also removed the getState function from the action.js file and moved it to the store.js file and then inside the script.js file i added console logs with strings and added the getState function inside them and using .value to get the value of the object inside the string being console logged. Thus completing all the user stories and requirements.
  
# Challenges
Before even starting the project I had a tough time grasping the concept from the lecture video of Schalk, I had to rewatch it more than once and the third watch I did a follow along to see which concepts of what he covered I could implement in these project. I first started with the state management example and worked my way up to redux example and adjusting the code in another file before working on my main project.

# Feedback
This challenge was a great introduction to state management which I something I had no concept of and more specifically a great introduction to redux even though this was a make shift version of it being utilised in Javascript and not REACT. I can not wait to start working on REACT and get to learn the in's and out's.

const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

// actions describe what happened
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//(prevState,action)=>newState

const initialState = {
  numOfCakes: 10,
};

// specify how app's state changes in response to action sent to store
// In terms of code reducer is a function that accepts state and action as arguments and
// returns the next state of the application
// (previousState,action)=> newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// one store for entire application
// Responsibilities -
// Holds application state
// Allows access to state via getState()
// Allows state to be updated via dispatch(action)
// registers listerners via subscrice(listener)
// Handles unregistering of listeners via function returned by subscrice(listener)
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// actions describe what happened
const BUY_CAKE = "BUY_CAKE";

const BUY_ICECREAM = "BUY_ICECREAM";

// action creator  for cakes
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action to buy cake",
  };
}

// action creators for IceCreams

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action to buy icecreams",
  };
}

//(prevState,action)=>newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const cakeIntitialState = {
  numOfCakes: 10,
};

const icecreamIntitialState = {
  numOfIcecreams: 20,
};

// specify how app's state changes in response to action sent to store
// In terms of code reducer is a function that accepts state and action as arguments and
// returns the next state of the application
// (previousState,action)=> newState

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = cakeIntitialState, action) => {
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

const icecreamReducer = (state = icecreamIntitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
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

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();

const LOGIN='LOGIN'
const LOGOUT='LOGOUT'

const defaultState = {
 authenticated: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

//counter
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return (state += 1);
    } else if (action.type === DECREMENT) {
        return (state -= 1);
    }
    return state;
}

const incAction = () => {
    return {type: INCREMENT};
}

const decAction = () => {
    return {type: DECREMENT};
}

const store = Redux.createStore(counterReducer);
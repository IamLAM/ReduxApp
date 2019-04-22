const reducer = (state = 5) => {
    return state;
  }
  
  const store=Redux.createStore(reducer);
  const currentState=store.getState();


let action={
  type:'LOGIN'
  
  }

  function actionCreator()
{
  return action
}
  
  
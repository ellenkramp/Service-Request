let createRequestAction = (payload) => ({ type: 'CREATE_REQUEST', payload });
// onClick => createRequestAction({title: 'Hello world', id:"3oifgur908reug90u"});

let editRequestAction = (payload) => ({ type: 'EDIT_REQUEST', payload });
// onClick => editRequestAction({title: 'Hello world', id:"3oifgur908reug90u"});


let createRequestReducer = (oldState = initialState, action) => {
  let requestToAdd = action.request;
  let oldRequestsArray = oldState.requests;
  let newRequestsArray = [ ...oldRequestsArray, requestToAdd ];
  return { ...oldState, requests: newRequestsArray };
}

let allReducers = {
  "CREATE_REQUESTS": createRequestReducer,
  "EDIT_REQUESTS": editRequestReducer
}

let masterReducer = (oldState, action) => {
  let reducerToPerform = allReducers[action.type];
  return reducerToPerform(state, action);
}
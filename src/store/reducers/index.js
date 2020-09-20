//write 3 reducers: one for currentAction, one for petCount, and one for IgnoreCount

const actionReducer = (state={}, action) => {
  switch(action) {
    case 'PET':
      return {currentAction: 'pet'};
    case 'IGNORE':
      return {...state, currentAction: 'ignore'};
    default: 
      return state;    
  }
}

export default actionReducer;
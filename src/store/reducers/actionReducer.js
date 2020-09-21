export const actionReducer = (state={}, action) => {
  switch(action) {
    case 'PET':
      return {currentAction: 'pet'};
    case 'IGNORE':
      return {...state, currentAction: 'ignore'};
    default: 
      return state;    
  }
}
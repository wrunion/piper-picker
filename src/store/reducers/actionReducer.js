export const actionReducer = (state={}, action) => {
  switch(action) {
    case 'PET':
      return {currentAction: 'pet'};
    case 'IGNORE':
      return {currentAction: 'ignore'};
    default: 
      return state;    
  }
}
export default (state=0, type) => {
  switch(type) {
    case "PET":
      return state + 5;
    case "IGNORE":
      return state - 3;
    default: 
      return state;  
  }
}

// export const actionReducer = (state={}, action) => {
//   switch(action) {
//     case 'PET':
//       return {currentAction: 'pet'};
//     case 'IGNORE':
//       return {currentAction: 'ignore'};
//     default: 
//       return state;    
//   }
// }
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
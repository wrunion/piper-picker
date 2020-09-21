import { actionReducer, countReducer } from './../reducers/actionReducer';

describe('actionReducer', () => {

  it('should return "currentAction: pet" if action type is PET', () => {
    expect(actionReducer({}, 'PET')).toEqual({currentAction: 'pet'});
  });

  it('should return "currentAction: ignore" if action type is IGNORE', () => {
    expect(actionReducer({}, 'IGNORE')).toEqual({currentAction: 'ignore'})
  });

  it('should return default state if action type is not IGNORE or PET', () => {
    expect(actionReducer({}, 'LICK')).toEqual({});
  });
});
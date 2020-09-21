import moodReducer from './../reducers/moodReducer';

describe('moodReducer', () => {

  it('should return 0 on startup', () => {
    expect(moodReducer(0,undefined)).toEqual(0);
  });

  it('should increment mood by 5 if action type is "PET"', () => {
    expect(moodReducer(0, 'PET')).toEqual(5);
    expect(moodReducer(10, 'PET')).toEqual(15);
  });

  it('should decrement mood by 3 if action type is "IGNORE"', () => {
    expect(moodReducer(0, 'IGNORE')).toEqual(-3);
    expect(moodReducer(10, 'IGNORE')).toEqual(7);
    expect(moodReducer(undefined, 'IGNORE')).toEqual(-3);
  });

});


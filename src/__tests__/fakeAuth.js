import reducer, { signIn, signOut, initialState } from '../store/fakeAuth';

describe('(Reducer) fakeAuth', () => {
  it('(Action) signIn', () => {
    localStorage.clear();
    const state = reducer(initialState, signIn());
    expect(state).toBe(true);
  });

  it('(Action) signOut', () => {
    localStorage.setItem('logged', 'true');
    const state = reducer(initialState, signOut());
    expect(state).toBe(false);
  });
});

import reducer, { requestZen, receiveZen, clearZen } from '../modules/zen';
import update, { updateChain } from 'immutability-helper-x';

describe('(Redux Module) Zen', () => {
  describe('(Reducer)', () => {
    it('(Action) requestZen', () => {
      let state = {
        fetching: false,
        text: []
      };
      state = reducer(state, requestZen());
      expect(state).toEqual({
        fetching: true,
        text: []
      });
    });

    it('(Action) receiveZen', () => {
      let state = {
        fetching: true,
        text: []
      };
      state = reducer(state, receiveZen('hello'));
      expect(state).toEqual({
        fetching: false,
        text: [{ id: 0, text: 'hello' }]
      });
    });

    it('(Action) clearZen', () => {
      let state = {
        text: []
      };
      state = reducer(state, clearZen());
      expect(state).toEqual({
        text: []
      });
    });
  });
});

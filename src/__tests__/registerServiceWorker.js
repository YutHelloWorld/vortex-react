import register, { unregister } from '../utils/registerServiceWorker';

describe('registerServiceWorker.js', () => {
  it('not throw', () => {
    expect(register).not.toThrow();
    expect(unregister).not.toThrow();
  });
});

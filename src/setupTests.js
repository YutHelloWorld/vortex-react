const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

// import assert from 'power-assert';
import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
});

test('null', () => {
  expect(reverse('')).toEqual('');
});
import {hexToRGBA, Opacity} from '../..';

test('adds 1 + 2 to equal 3', () => {
  const result = 'rgba(78, 79, 235, 0.2)';
  expect(hexToRGBA('#4E4FEB', Opacity['CERO.TWO'])).toBe(result);
});

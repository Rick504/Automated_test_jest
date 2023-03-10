const { soma, divisao } = require('./index');

test('soma 1 + 2 para dar 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('divide 4 / 2 para dar 2', () => {
  expect(divisao(4,2)).toBe(2);
});

test('soma 4 + 4 para dar 8', () => {
  expect(soma(4, 4)).toBe(8);
});

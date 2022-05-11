import React from 'react';
import renderer from 'react-test-renderer';

test('Quote should match this text', () => {
  const tree = renderer.create(
    <p>
      Mathematics is not about numbers, equations, computations
      or algorithms. It is about understanding. -- William Paul Thurston
    </p>,
  );
  expect(tree).toMatchSnapshot();
});

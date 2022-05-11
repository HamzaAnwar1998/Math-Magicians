import React from 'react';
import renderer from 'react-test-renderer';
// import Calculator from './Calculator';

test('Calculator page should match the text', () => {
  const tree = renderer.create(<h3>Lets do some maths!</h3>).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';

it('renders HomeContent heading', () => {
  const tree = renderer.create(<h1>Welcome to our page!</h1>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from "../app/App";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('snapshot test for App', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
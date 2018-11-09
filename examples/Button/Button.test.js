// Button.test.js

import Button from './Button.react';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(
      <Button></Button>
    );

    expect(
      renderedComponent.find("button").node
    ).toBeDefined();
  });

  it('renders text', () => {
    const text = "Click me!";
    const renderedComponent = shallow(
      <Button>{ text }</Button>
    );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
});

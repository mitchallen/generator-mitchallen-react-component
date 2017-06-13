import React from 'react';
import <%= reactClassName %> from '../src/index';

describe('<%= reactClassName %>', () => {
  const wrapper = shallow(<<%= reactClassName %> />);

  it('root element should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });
});
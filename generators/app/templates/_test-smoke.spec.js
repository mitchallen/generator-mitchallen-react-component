import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import <%= reactClassName %> from '../src/index';

describe('<%= reactClassName %>', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<<%= reactClassName %> />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });

});
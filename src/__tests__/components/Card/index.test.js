import React from 'react';
import Card from '~/components/Card/index';
import {shallow} from 'enzyme';

describe('<Card />', () => {
  it('should set new state when user click donation amount', () => {
    const component = shallow(
      <Card />,
    );
    component.find('PaymentDialog').dive().find('RadioLabel').at(2).dive().find('input').simulate('click');
    expect(component.state().selectedAmount).toBe(50);
  });
});
import React from 'react';
import CardList from '../../../components/CardList/index';
import {shallow} from 'enzyme';

const mockCharities = [
  {
    id: 1,
    name: 'Baan Kru Noi',
    image: 'baan-kru-noi.jpg',
    currency: 'THB',
    visible: true,
  },
  {
    id: 2,
    name: 'Habitat for Humanity Thailand',
    image: 'habitat-for-humanity-thailand.jpg',
    currency: 'THB',
    visible: false,
  },
  {
    id: 3,
    name: 'Paper Ranger',
    image: 'paper-ranger.jpg',
    currency: 'THB',
    visible: true,
  },
];

describe('<CardList />', () => {
  it('CardList should render correct item', () => {
    const component = shallow(
      <CardList charities={mockCharities} handlePay={() => 1}/>,
    );
    expect(component.find('Card').length).toBe(2);
    expect(component.find('Card').at(1).props().id).toBe(3);
  });
});
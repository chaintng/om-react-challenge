import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '~/components/Card';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  
  > div {
    flex-basis: 600px;
  }
  
  &:after {
    content: "";
    flex-basis: 600px;
  }
`;

class CardList extends Component {
  render() {
    const { charities, handlePay } = this.props;
    const displayCharities = charities.filter((item) => item.visible);
    const cards = displayCharities.map((item, i) => (
      <Card key={item.charitiesId} {...item} handlePay={handlePay}/>
    ));

    return (
      <Wrapper>
        <FlipMove typeName={null}>
          {cards}
        </FlipMove>
      </Wrapper>
    );
  }
}

CardList.propTypes = {
  charities: PropTypes.arrayOf(PropTypes.object),
  handlePay: PropTypes.func,
};

export default CardList;
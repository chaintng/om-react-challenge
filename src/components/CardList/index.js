import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '~/components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
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
    const cards = charities.map((item, i) => (
      <Card key={i} {...item} handlePay={handlePay}/>
    ));

    return (
      <Wrapper>
        {cards}
      </Wrapper>
    );
  }
}

CardList.propTypes = {
  charities: PropTypes.arrayOf(PropTypes.object),
  handlePay: PropTypes.func,
};

export default CardList;
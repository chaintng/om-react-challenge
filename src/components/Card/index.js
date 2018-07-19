import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { donationAmountOption } from '~/constants';

const CardDiv = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: 10,
    };
  }

  render() {
    const {id, currency, name, handlePay} = this.props;

    const payments = donationAmountOption.map((amount, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onClick={() => {
            this.setState({ selectedAmount: amount });
          }} /> {amount}
      </label>
    ));

    return (
      <CardDiv>
        <p>{name}</p>
        {payments}
        <button onClick={() => handlePay(id, this.state.selectedAmount, currency)}>Pay</button>
      </CardDiv>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  currency: PropTypes.string,
  handlePay: PropTypes.func,
};

export default Card;
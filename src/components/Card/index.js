import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as changeCase from 'change-case';
import styled from 'styled-components';
import { donationAmountOption } from '~/constants';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 10px;
  border: 1px solid #ccc;
`;

const CardWithImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const CardCaption = styled.div`
  display: flex;
  padding: 10px;
  
  > * {
    flex: auto;
    display: flex;
    align-items: center;
  }
  
  > button {
    flex: 0 0 50px;
  }
`;

function CardWithImage({name}) {
  return <CardWithImageWrapper>
    <div><img src={`/images/${changeCase.paramCase(name)}.jpg`}/></div>
    <CardCaption>
      <div>{name}</div>
      <button>Donate</button>
    </CardCaption>
  </CardWithImageWrapper>;
}

function PaymentDialog({id, currency, handleSelectAmount, handlePay}) {
  const payments = donationAmountOption.map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        onClick={() => {
          handleSelectAmount(amount);
        }} /> {amount}
    </label>
  ));

  return <div>
    {payments}
    <button onClick={handlePay}>Pay</button>
  </div>;
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: 10,
    };
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
  }

  handleSelectAmount(amount) {
    this.setState({selectedAmount: amount});
  }

  render() {
    const {id, currency, handlePay} = this.props;
    return (
      <Wrapper>
        <CardWithImage {...this.props} />
        <PaymentDialog {...this.props}
          handleSelectAmount={this.handleSelectAmount}
          handlePay={() => handlePay(id, this.state.selectedAmount, currency)}/>
      </Wrapper>
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
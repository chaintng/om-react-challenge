import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as changeCase from 'change-case';
import { donationAmountOption } from '~/constants';
import { Wrapper, CardCaption, CardCoverImageWrapper, CardWithImageWrapper, PaymentOption, PaymentWrapper } from './styles';

function CardWithImage({name, handleDonate}) {
  return <CardWithImageWrapper>
    <CardCoverImageWrapper>
      <img src={`/images/${changeCase.paramCase(name)}.jpg`}/>
    </CardCoverImageWrapper>
    <CardCaption>
      <div>{name}</div>
      <button onClick={handleDonate}>Donate</button>
    </CardCaption>
  </CardWithImageWrapper>;
}

function PaymentDialog({visible, id, currency, handleSelectAmount, handlePay, handleCloseDialog}) {
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

  return <PaymentWrapper visible={visible}>
    <i className="fas fa-times" onClick={handleCloseDialog}></i>
    <h3>Select the amount to donate ({currency})</h3>
    <PaymentOption>{payments}</PaymentOption>
    <div><button onClick={handlePay}>Pay</button></div>
  </PaymentWrapper>;
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPaymentDialog: false,
      selectedAmount: 10,
    };
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.togglePaymentDialog = this.togglePaymentDialog.bind(this);
    this.handlePay = this.handlePay.bind(this);
  }

  togglePaymentDialog() {
    this.setState({ showPaymentDialog: !this.state.showPaymentDialog });
  }

  handlePay() {
    this.togglePaymentDialog();
    return this.props.handlePay(this.props.id, this.state.selectedAmount, this.props.currency);
  }
  
  handleSelectAmount(amount) {
    this.setState({selectedAmount: amount});
  }

  render() {
    return (
      <Wrapper>
        <CardWithImage {...this.props}
          handleDonate={this.togglePaymentDialog}
        />
        <PaymentDialog {...this.props}
          visible={this.state.showPaymentDialog}
          handleCloseDialog={this.togglePaymentDialog}
          handleSelectAmount={this.handleSelectAmount}
          handlePay={this.handlePay}/>
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
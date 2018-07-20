import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as changeCase from 'change-case';
import styled from 'styled-components';
import { donationAmountOption } from '~/constants';

const Wrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 5px 10px 18px #BBB;
  border-radius: 3px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
`;

const CardCoverImageWrapper = styled.div`
  max-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const CardWithImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const PaymentWrapper = styled.div`
  transform: translateY(${props => props.visible ? '0%' : '100%'});
  transition: transform .2s ease-in;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  flex: none;
  
  > * {
    flex-basis: 50px;
    display: flex;
    justify-content: center;
  }
  
  > i {
    justify-content: flex-end;
    padding: 0px 20px;
  }
`;

const PaymentOption = styled.div`
  dislay: flex;
  justify-content: space-around;
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
    <div>Select the amount to donate (USD)</div>
    <PaymentOption>{payments}</PaymentOption>
    <div style={{flexBasis: 'auto'}}><button onClick={handlePay}>Pay</button></div>
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
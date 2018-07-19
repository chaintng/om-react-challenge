import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';
import CardList from '~/components/CardList';
import Notification from './components/Notification';
import { updateMessage, updateTotalDonate } from '~/actions/App';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charities: [],
      selectedAmount: 10,
    };

    this.handlePay = this.handlePay.bind(this);
  }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.setState({charities: data});
      });

    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.props.dispatch(updateTotalDonate(summaryDonations(data.map((item) => (item.amount)))));
      });
  }

  handlePay(id, amount, currency) {
    const self = this;
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function () {
        self.props.dispatch(updateMessage(amount));
        self.props.dispatch(updateMessage(`Thanks for donate ${amount}!`));

        setTimeout(function () {
          self.props.dispatch(updateMessage(''));
        }, 2000);
      });
  }

  render() {
    const {donate, message} = this.props;

    return (
      <div>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        <Notification message={message}/>
        <CardList charities={this.state.charities} handlePay={this.handlePay}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state.app});

export default connect(mapStateToProps)(hot(module)(App));

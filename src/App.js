import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux';
import CardList from '~/components/CardList';
import Notification from './components/Notification';
import { payDonation, hydrateAppData } from '~/actions/App';

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
    this.props.dispatch(hydrateAppData())
  }

  handlePay(charitiesId, amount, currency) {
    this.props.dispatch(payDonation({
      charitiesId,
      amount,
      currency,
    }));
  }

  render() {
    const {charities, donate, message} = this.props;

    return (
      <div>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        <Notification message={message}/>
        <CardList charities={charities} handlePay={this.handlePay}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state.app});

export default connect(mapStateToProps)(hot(module)(App));

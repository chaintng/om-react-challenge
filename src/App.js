import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import CardList from '~/components/CardList';
import Notification from './components/Notification';
import SearchBox from './components/SearchBox';
import { payDonation, hydrateAppData } from '~/actions/App';
import styled from 'styled-components';
import { numberWithCommas } from '~/helpers';

const Header = styled.div`
  background: lightblue;
  color: white;
  padding: 10px;
  
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DivContainer = styled.div`
  max-width: 1300px;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePay = this.handlePay.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(hydrateAppData());
  }

  handlePay(charitiesId, amount, currency) {
    this.props.dispatch(payDonation({
      charitiesId,
      amount,
      currency,
    }));
  }

  render() {
    const {charities, donate, notification} = this.props;

    return (
      <div>
        <Header>
          <DivContainer>
            <h1>Omise Tamboon React</h1>
            <p style={{ textAlign: 'center' }}><strong>TOTAL DONATION:</strong> {numberWithCommas(donate)}</p>
          </DivContainer>
        </Header>
        <DivContainer>
          <SearchBox/>
          <Notification {...notification} />
          <CardList charities={charities} handlePay={this.handlePay}/>
        </DivContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state.app});

export default connect(mapStateToProps)(hot(module)(App));

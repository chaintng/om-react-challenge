import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import CardList from '~/components/CardList';
import Notification from './components/Notification';
import SearchBox from './components/SearchBox';
import { payDonation, hydrateAppData, searchKeywordChange } from '~/actions/App';
import styled from 'styled-components';
import { numberWithCommas } from '~/helpers';

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

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
    this.onSearch = this.onSearch.bind(this);
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

  onSearch(searchKeyword) {
    this.props.dispatch(searchKeywordChange(searchKeyword));
  }

  render() {
    const {charities, donate, notification} = this.props;

    return (
      <Wrapper>
        <Header>
          <DivContainer>
            <h1>Omise Tamboon React</h1>
            <p style={{ textAlign: 'center' }}><strong>TOTAL DONATION:</strong> {numberWithCommas(donate)}</p>
          </DivContainer>
        </Header>
        <DivContainer>
          <SearchBox onSearch={this.onSearch}/>
          <Notification {...notification} />
          <CardList charities={charities} handlePay={this.handlePay}/>
        </DivContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({...state.app});

export default connect(mapStateToProps)(hot(module)(App));

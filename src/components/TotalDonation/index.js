import React, {Component} from 'react';
import {numberWithCommas} from '~/helpers';


class TotalDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAmount: 0,
    };
  }

  shouldComponentUpdate(props) {
    if (this.state.displayAmount < props.totalAmount) {
      setTimeout(() => {
        this.setState({
          displayAmount: this.state.displayAmount === 0 ? props.totalAmount : this.state.displayAmount + 1,
        });
      }, (1000 / (props.totalAmount - this.state.displayAmount)));
      return true;
    }

    return false;
  }

  render() {
    return <div style={{fontSize: '1.6em', fontWeight: 'bold'}}>{numberWithCommas(this.state.displayAmount)}</div>;
  }
}

export default TotalDonation;
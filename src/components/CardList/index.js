import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '~/components/Card';

class CardList extends Component {
  render() {
    const { charities, handlePay } = this.props;
    const cards = charities.map((item, i) => (
      <Card key={i} {...item} handlePay={handlePay}/>
    ));

    return (
      <div>
        {cards}
      </div>
    );
  }
}

CardList.propTypes = {
  charities: PropTypes.arrayOf(PropTypes.object),
  handlePay: PropTypes.func,
};

export default CardList;
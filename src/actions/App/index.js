import fetch from 'isomorphic-fetch';
import config from '~/config';
import {summaryDonations} from '~/helpers';
import Promise from 'bluebird';

export const initializeCharities = (charities) => {
  return {
    type: 'INITIALIZE_CHARITIES',
    charities,
  };
};

export const updateTotalDonate = (amount) => {
  return {
    type: 'UPDATE_TOTAL_DONATE',
    amount,
  };
};

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message,
  };
};

// redux thunk

export const payDonation = ({charitiesId, amount, currency}) => {
  return async (dispatch) => {
    try {
      await fetch(`${config.BACKEND_ENDPOINT}/payments`, {
        method: 'POST',
        body: JSON.stringify({ charitiesId, amount, currency }),
      });

      dispatch(updateTotalDonate(amount));
      dispatch(updateMessage(`Thanks for donate ${amount}!`));

      setTimeout(function () {
        dispatch(updateMessage(''));
      }, 2000);
    } catch (e) {
      console.error(e);
      dispatch(updateMessage('Sorry, there is some error during payment. Please try again later.'));
    }
  };
};

export const hydrateAppData = () => {
  return async (dispatch) => {
    const [charities, payments] = await Promise.all([
      fetch(`${config.BACKEND_ENDPOINT}/charities`).then((resp) => resp.json()),
      fetch(`${config.BACKEND_ENDPOINT}/payments`).then((resp) => resp.json()),
    ]);

    dispatch(initializeCharities(charities));
    dispatch(updateTotalDonate(summaryDonations(payments.map((item) => (item.amount)))));
  };
};
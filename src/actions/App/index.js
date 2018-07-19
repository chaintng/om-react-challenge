import fetch from 'isomorphic-fetch';
import config from '~/config';

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
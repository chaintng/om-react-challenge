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

export const updateMessage = (visible, level, message) => {
  return {
    type: 'UPDATE_MESSAGE',
    notification: {
      visible,
      level,
      message,
    },
  };
};

export const hideMessage = (visible) => {
  return {
    type: 'HIDE_MESSAGE',
    notification: {
      visible,
    },
  };
};

export const searchKeywordChange = (searchKeyword) => {
  return {
    type: 'SEARCH_KEYWORD_CHANGE',
    searchKeyword,
  };
};

// redux thunk

export const payDonation = ({charitiesId, amount, currency}) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${config.BACKEND_ENDPOINT}/payments`, {
        method: 'POST',
        body: JSON.stringify({ charitiesId, amount, currency }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 404) {
        throw response;
      }

      dispatch(updateTotalDonate(amount));
      dispatch(updateMessage(true, 'success', `Thanks for donate ${amount}!`));

    } catch (e) {
      console.error(e);
      dispatch(updateMessage(true, 'error', 'Sorry, there is some error during payment. Please try again later.'));
    } finally {
      setTimeout(function () {
        dispatch(hideMessage(false));
      }, 2000);
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
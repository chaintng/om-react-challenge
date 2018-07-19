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
const defaultState = {
  donate: 0,
  message: '',
};

function app(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return { ...state,
        donate: state.donate + action.amount,
      };
    case 'UPDATE_MESSAGE':
      return { ...state,
        message: action.message,
      };

    default:
      return state;
  }
}

export default app;
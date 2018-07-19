const defaultState = {
  charities: [],
  donate: 0,
  message: '',
};

function app(state = defaultState, action) {
  switch (action.type) {
    case 'INITIALIZE_CHARITIES':
      return { ...state,
        charities: action.charities,
      };
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
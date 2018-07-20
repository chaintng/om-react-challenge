const defaultState = {
  charities: [],
  donate: 0,
  message: '',
  notification: null,
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
    case 'HIDE_MESSAGE':
      return { ...state,
        notification: {
          ...state.notification,
          visible: action.visible,
        },
      }
    case 'UPDATE_MESSAGE':
      return { ...state,
        notification: action.notification,
      };

    default:
      return state;
  }
}

export default app;
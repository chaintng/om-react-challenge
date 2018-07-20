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
        charities: action.charities.map((item) => {
          item.visible = true;
          return item;
        }),
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
      };
    case 'UPDATE_MESSAGE':
      return { ...state,
        notification: action.notification,
      };

    case 'SEARCH_KEYWORD_CHANGE':
      return { ...state,
        charities: state.charities.map((item) => {
          item.visible = item.name.toLowerCase().indexOf(action.searchKeyword.toLowerCase()) >= 0;
          return item;
        }),
      };
    default:
      return state;
  }
}

export default app;
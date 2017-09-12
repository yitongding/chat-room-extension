const initState = {
  messages: [],
};

const chatReducer = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default chatReducer;

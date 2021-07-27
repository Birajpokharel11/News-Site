const INITIAL_STATE = {
  openAlert: false,
  message: 'Something went wrong!',
  severity: 'error',
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'OPEN_ALERT':
      return {
        openAlert: true,
        message: payload.message,
        severity: payload.severity,
      };
    case 'CLOSE_ALERT':
      return { ...state, openAlert: false };
    default:
      return state;
  }
};

export default alertReducer;

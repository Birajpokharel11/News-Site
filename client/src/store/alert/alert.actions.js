export const openAlert = (message, severity) => ({
  type: 'OPEN_ALERT',
  payload: { message, severity },
});
export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
});

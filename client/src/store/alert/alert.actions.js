export const openAlert = (message, severity) => ({
  type: 'OPEN_ALERT',
  payload: { message, severity }
});
console.log(openAlert);
export const closeAlert = () => ({
  type: 'CLOSE_ALERT'
});

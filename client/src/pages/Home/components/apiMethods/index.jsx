export const subscribe = (user) => {
  return fetch('subscribe/subs', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

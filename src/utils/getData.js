const getData = api => {
  return fetch(api)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default getData;

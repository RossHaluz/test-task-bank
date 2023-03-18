const myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const getCurrentExchanges = (amount = 25, from = 'GBP', to = 'JPY') => {
  const responce = fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  return responce;
};

export const getCurrentCurrency = (lat, long) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const response = fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  return response;
};

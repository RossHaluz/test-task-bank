const myHeaders = new Headers();
myHeaders.append("apikey", "Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

  export const getCurrentExchanges = (amount=25, from="GBP", to="JPY") => {
    const responce = fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

    return responce;
  }
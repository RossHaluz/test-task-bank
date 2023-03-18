import FormExchanges from 'components/FormExchanges';
import { useEffect, useState } from 'react';
import { getCurrentExchanges, getCurrentCurrency } from '../components/api-service/api';

const Home = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 const [currentCurrency, setCurrentCurrency]= useState('USD')

  useEffect(() => {

    function success(pos) {
      const crd = pos.coords;

      console.log('Ваше текущее местоположение:');
      console.log(`Широта: ${crd.latitude}`);
      console.log(`Долгота: ${crd.longitude}`);
      getCurrentCurrency(crd.latitude, crd.longitude).then(data => setCurrentCurrency(data.results[0].annotations.currency.iso_code))
    }

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const getData = ({ to, from, amount }) => {
    setIsLoading(true);
    getCurrentExchanges(amount, from, to)
      .then(({ result }) => setResult(result))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <FormExchanges onSubmit={getData} />
      {isLoading && <p>Loading...</p>}
      <h1>{result}</h1>
      <h2>currentCurrency: {currentCurrency}</h2>
    </>
  );
};
export default Home;

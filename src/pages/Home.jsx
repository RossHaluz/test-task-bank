import FormExchanges from 'components/FormExchanges';
import { useEffect, useState } from 'react'
import {getCurrentExchanges} from '../components/api-service/api'
 
const Home = () => {
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getData = ({to, from, amount}) => {
        setIsLoading(true)
        getCurrentExchanges(amount, from, to).then(({result}) => setResult(result)).finally(() => setIsLoading(false))
    }

  return <>
  <FormExchanges onSubmit={getData}/>
  {isLoading && <p>Loading...</p>}
  <h1>{result}</h1>
  </>
}
export default Home;
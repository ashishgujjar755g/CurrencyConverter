import { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [count, setCount] = useState(0)
  const currencyInfo = useCurrencyInfo("usd")

  return (
    <>
   <button onClick={()=>currencyInfo } className='w-10  '>click</button>
    </>
  )
}

export default App

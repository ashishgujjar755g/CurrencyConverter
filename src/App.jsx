import { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from "./components";


function App() {
  const [count, setCount] = useState(0)
  const currencyInfo = useCurrencyInfo("usd")

  return (
    <>
      <div
        className="w-full flex justify-center items-center h-screen bg-cover bg-no-repeat "
        style={{
          background: `url(
            "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          )`,
        }}
      >
        <div className='w-full'>
          <div className="w-full max-w-md mx-auto border-2 border-blue-600 p-5 rounded-lg  backdrop-blur-sm bg-white/30">
            <form onSubmit={(e)=>{
              e.preventDefault();
            }}>
          
          <div className="w-full mb-1">
            <InputBox lebel="From" />
          </div>
          <div className="relative w-full h-0.5">
            <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-800 active:scale-95"
            type='button'>
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox lebel="To"  />
          </div>
          <button type="submit" className="w-full  bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800 active:scale-98">
            Convert
          </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './pages/loadingScreen/LoadingScreen';

function App() {
  const [val, setVal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },2000)
    return () => clearTimeout(timer)
  },[])

  if (loading){
    return (
      <LoadingScreen/>
    )
  }
  return (
    <div className='flex-container'>
      <img width={100} src='/snipecv.svg'/>
      <button onClick={() => setVal((val) => val + 1)}>
        <h1>{val}</h1>
      </button>
    </div>
  )
}

export default App

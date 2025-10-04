import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState(0);
  return (
    <div  className='flex-container'>
      <button onClick={() => setVal((val) => val + 1)}>
        <h1>{val}</h1>
      </button>
    </div>
  )
}

export default App

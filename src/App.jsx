import { useState } from 'react'
import './App.css'
import Card from './section/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1 className="text-3xl font-bold underline">hi</h1> */}
        <Card/>
      </div>
    </>
  )
}

export default App

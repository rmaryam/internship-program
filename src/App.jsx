import { useState } from 'react'
import Button from './Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count+1);
  const handleDecrement = () => setCount(count-1);
  const handleReset = () => setCount(0);

  return (
    <>
      <p>{count}</p>
      <Button text="Decrement" onPress={handleDecrement}/>
      <Button text="Reset" onPress={handleReset}/>
      <Button text="Increment" onPress={handleIncrement}/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Search from '../Search/Search'
import './List.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search/>
    </>
  )
}

export default App

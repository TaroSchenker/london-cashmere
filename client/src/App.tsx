import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="p-6 rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-semibold mb-4">Hello, TailwindCSS!</h1>
      <p className="text-gray-800">If you see this styled text, TailwindCSS is working!</p>
    </div>
  </div>
  )
}

export default App

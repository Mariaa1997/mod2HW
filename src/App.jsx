import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis'
import WebsiteVisitors from './components/WebsiteVisitors'
import AverageRating from './components/AverageRating'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Sidebar sidebar/>
      <Reviews reviews />
      <AverageRating  />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
     
  )
}

export default App

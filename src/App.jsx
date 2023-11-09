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
      <Sidebar sidebar= 'Dashboard'/>
      <Reviews reviews = '1,281'/>
      <AverageRating  averageRating = '4.6'/>
      <SentimentAnalysis sentimentAnalysis = '960 , 122 , 321'/>
      <WebsiteVisitors  websiteVisitors = '821'/>
    </div>
     
  )
}

export default App

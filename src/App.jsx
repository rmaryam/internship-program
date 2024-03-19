import './App.css'
import rightImage from './assets/image.jpg'

function App() {
  

  return (
    <div className='mainContainer'>
      <div className='leftContainer'>
        <h1>Just the right amount of everything.</h1>
        <p>A new dual‑camera system captures more of what you see and love. 
         The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. 
         And the highest‑quality video in a smartphone, so your memories look better than ever.</p>
        <button>READ MORE</button>
      </div>
      <div className='rightContainer'>
       <img src={rightImage}></img>
      </div>
    </div>
  )
}

export default App

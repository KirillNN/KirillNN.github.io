import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  return (
    <>
      <div className='video-container'>
        <div className='video'>
          <img className='video-img' src={reactLogo} alt="video image" />
          <p>Видео 1</p>
          <p>Pamazkov 25</p>
          <div className='video-footer'>
            <p>Лайки: 0</p>
            <button>Лайк</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

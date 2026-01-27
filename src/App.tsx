import React from 'react'
import Dock from './components/Dock'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover'>
      <Dock/>
    </main>
  )
}

export default App
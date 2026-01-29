import React from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover'>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App
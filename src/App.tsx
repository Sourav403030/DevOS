import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover'>
      <Nav/>
      <Dock/>

      <Github/>
      <Notes/>
    </main>
  )
}

export default App
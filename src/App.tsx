import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover'>
      <Nav/>
      <Dock/>

      <Github/>
    </main>
  )
}

export default App
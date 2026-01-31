import Dock from './components/Dock'
import Nav from './components/Nav'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover relative overflow-hidden'>
      <Nav/>
      <Dock/>

      <Github/>
      <Notes/>
      <Resume/>
      <Spotify/>
      <Cli/>
    </main>
  )
}

export default App
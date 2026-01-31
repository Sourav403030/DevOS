import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'

const App = () => {
  return (
    <main className='h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover relative overflow-hidden'>
      <Nav/>
      <Dock/>

      <Github/>
      <Notes/>
      <Resume/>
    </main>
  )
}

export default App
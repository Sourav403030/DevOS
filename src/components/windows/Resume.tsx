import type { windowPropsInterface } from './Github'
import MacWindow from './MacWindow'

const Resume = ({windowName, setWindowState}:windowPropsInterface) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className='h-full overflow-auto'>
            <iframe className='h-full w-full' src="/resume.pdf"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
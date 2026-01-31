import React from 'react'
import MacWindow from './MacWindow'

const Resume = () => {
  return (
    <MacWindow>
        <div className='h-full overflow-auto'>
            <iframe className='h-full w-full' src="/resume.pdf"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
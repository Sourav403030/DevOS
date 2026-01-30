import { githubData } from '../../assets/githubData'
import MacWindow from './MacWindow'
import type { githubDataInterface } from '../../assets/githubData'

const GitCard = ({data}: {data: githubDataInterface}) => {
    return <div className="card text-white w-80 h-112 bg-[#222] p-5 rounded-xl flex flex-col gap-2 cursor-default">
        <img className='rounded-2xl w-full h-40 object-cover object-center shrink-0' src={data.image} alt="" />
        <h1 className='text-xl font-semibold text-center shrink-0'>{data.title}</h1>
        <p className='text-sm font-light text-balance flex-1 overflow-hidden'>{data.description}</p>

        <div className="tag flex flex-wrap gap-2 shrink-0">
            {
                data.tags.map(tag => <p className='bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 text-xs rounded-xl font-semibold' key={tag}>{tag}</p>)
            }
        </div>

        <div className="urls flex justify-between text-stone-300 shrink-0">
            <a className='underline cursor-pointer' href={data.repoLink}>Repo</a>
            <a className='underline cursor-pointer' href={data.demoLink}>Live</a>
        </div>
    </div>
}

const Github = () => {
  return (
    <MacWindow>
        <div className="cards p-5 flex flex-wrap gap-8 justify-center items-start">
            {githubData.map(project=>{
                return <GitCard key={project.id} data={project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github
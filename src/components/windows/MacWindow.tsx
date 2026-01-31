import type { PropsWithChildren } from "react"
import { Rnd } from "react-rnd"

interface MacWindowProps extends PropsWithChildren {
  width?: string;
  height?: string;
}

const MacWindow = ({children, width="720", height="520"}: MacWindowProps) => {
  return (
    <Rnd 
      default={{
        x: 400,
        y: 250,
        width: width,
        height: height,
      }}
      minWidth={520}
      minHeight={520}
      
    >
        <div className="window h-full w-full bg-black rounded-2xl flex flex-col">
            <div className="nav py-2 px-4 flex justify-start gap-5 border-b border-b-stone-700 shrink-0">
                <div className="dots flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-sm font-semibold">souravsanjay</p>
                    <p className="text-gray-400 text-sm font-semibold"> -zsh</p>
                </div>
            </div>
            <div className="main-content flex-1 overflow-auto">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
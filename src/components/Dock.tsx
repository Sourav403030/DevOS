import type { WindowStateInterface } from "../App";

interface DockProps {
  windowState: WindowStateInterface;
  setWindowState: React.Dispatch<React.SetStateAction<WindowStateInterface>>;
}

const Dock = ({ windowState, setWindowState }: DockProps) => {
  return (
    <footer>
      <div className="flex absolute bottom-3 left-1/2 translate-x-[-50%] px-8 py-2  gap-5  bg-[rgba(63,63,63,0.3)] backdrop-blur-2xl cursor-pointer items-center backdrop-opacity-100 rounded-2xl">
        <div 
        onClick={()=>window.open("https://calendar.google.com/", "_blank")}

        className="icon w-12 h-12 p-3 bg-linear-to-bl from-blue-100 to-blue-700 rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%]">
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/calendar.svg"
            alt=""
          />
        </div>
        <div
          onClick={() =>
            setWindowState((state: WindowStateInterface) => ({
              ...state,
              cli: true,
            }))
          }
          className={`icon w-12 h-12 p-3 bg-black rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%] ${
            windowState.cli ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/cli.svg"
            alt=""
          />
        </div>
        <div
        onClick={()=>window.open("https://www.linkedin.com/in/sourav-sanjay-186259287/", "_blank")}
         className="icon w-12 h-12 p-2  bg-white rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%]">
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/linkedin.svg"
            alt=""
          />
        </div>
        <div
        onClick={()=>window.open("https://x.com/_Sourav_Sanjay_", "_blank")}
         className="icon w-12 h-12 p-2 bg-white rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%]">
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/x.svg"
            alt=""
          />
        </div>
        <div
        onClick={()=>window.open("mailto:souravsanjay07@gmail.com", "_blank")}
        
         className="icon w-12 h-12 p-3 bg-linear-to-bl from-blue-300 to-blue-700 rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%]">
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/mail.svg"
            alt=""
          />
        </div>
        <div
          onClick={() =>
            setWindowState((state: WindowStateInterface) => ({
              ...state,
              resume: true,
            }))
          }
          className={`icon w-12 h-12 p-3 bg-red-500 rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%] ${
            windowState.resume ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/pdf.svg"
            alt=""
          />
        </div>
        <div
          onClick={() =>
            setWindowState((state: WindowStateInterface) => ({
              ...state,
              github: true,
            }))
          }
          className={`icon w-12 h-12 p-3 bg-black rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%] ${
            windowState.github ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/github.svg"
            alt=""
          />
        </div>
        <div
          onClick={() =>
            setWindowState((state: WindowStateInterface) => ({
              ...state,
              spotify: true,
            }))
          }
          className={`icon w-12 h-12 p-3 bg-linear-to-bl from-green-400 to-green-800 rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%] ${
            windowState.spotify ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/spotify.svg"
            alt=""
          />
        </div>
        <div
          onClick={() =>
            setWindowState((state: WindowStateInterface) => ({
              ...state,
              notes: true,
            }))
          }
          className={`icon w-12 h-12 p-3 bg-linear-to-bl from-yellow-500 to-orange-500 rounded-xl hover:scale-130 transition-all duration-150 ease-linear hover:translate-y-[-20%] ${
            windowState.notes ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="/dock-icons/notes.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Dock;

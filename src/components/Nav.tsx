import DateTime from "./DateTime"


const Nav = () => {
  return (
    <nav className="flex justify-between px-4 py-2">
        <div className="left flex items-center gap-5 text-white">
            <div className="apple-icon">
                <img className="w-5" src="./nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-items  font-bold">
                <p>Sourav Sanjay</p>
            </div>
            <div className="nav-items text-sm">
                <p>File</p>
            </div>
            <div className="nav-items text-sm">
                <p>Terminal</p>
            </div>
            <div className="nav-items text-sm">
                <p>Help</p>
            </div>
        </div>
        <div className="right text-white flex gap-5 items-center">
            <div className="nav-icons">
                <img className="w-5" src="/nav-icons/wifi.svg" alt="" />
            </div>
            <DateTime/>
        </div>
    </nav>
  )
}

export default Nav
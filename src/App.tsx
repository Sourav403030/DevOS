import { useState } from "react";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";

export interface WindowStateInterface {
  github: boolean;
  notes: boolean;
  spotify: boolean;
  cli: boolean;
  resume: boolean;
}

const App = () => {
  const [windowState, setWindowState] = useState<WindowStateInterface>({
    github: false,
    notes: false,
    spotify: false,
    cli: false,
    resume: false,
  });
  return (
    <main className="h-screen w-full bg-[url(/macos-wallpaper.jpg)] bg-center bg-cover relative overflow-hidden">
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />

      {windowState.github && (
        <Github
          windowName="github"
          setWindowState={setWindowState}
        />
      )}
      {windowState.notes && (
        <Notes
          windowName="notes"
          setWindowState={setWindowState}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          setWindowState={setWindowState}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowState={setWindowState}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          setWindowState={setWindowState}
        />
      )}
    </main>
  );
};

export default App;

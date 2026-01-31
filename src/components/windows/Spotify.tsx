import MacWindow from "./MacWindow"


const Spotify = () => {
  return (
    <MacWindow width="400">
        <div className="h-full">
            <iframe className="h-full" data-testid="embed-iframe" style={{borderRadius: "12px"}}src="https://open.spotify.com/embed/album/2e7HNQJ0BcMoqwsVDwDhK8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
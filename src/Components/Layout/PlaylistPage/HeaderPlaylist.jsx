function HeaderPlaylist(props) {
    return (
        <div className="header-playlist">
            <img src={props.data.img + "/200/200"} alt="image-playlist" />
            <div className="playlist-info">
                <span>Playlist</span>
                <span style={{ fontSize: 100 }}>{props.data.name}</span>
                <span>{props.data.musiques.length} titres</span>
            </div>
        </div>)
}
export default HeaderPlaylist 
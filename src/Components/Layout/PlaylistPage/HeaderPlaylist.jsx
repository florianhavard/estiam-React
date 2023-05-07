function HeaderPlaylist(props) {
    return (
        <div className="header-playlist">
            <img src={props.data.img + "/200/200"} alt="image-playlist" />
            <div className="playlist-info">
                <span>Playlist</span>
                <span className="title-playlist">{props.data.name}</span>
                <span>{props.data.musiques.length} titres</span>
            </div>
        </div>)
}
export default HeaderPlaylist 
function PlayListContent(props) {
    return (
        <table className="content-playlist">
            <thead>
                <tr>
                    <th>Cover</th>
                    <th>Titre</th>
                    <th>Artiste</th>
                </tr>
            </thead>
            <tbody>
                {props.musiques.map((musique) => {
                    return (
                        <tr key={musique.id}>
                            <td><img src={musique.img + "/40/40"} alt="image-playlist" /></td>
                            <td>{musique.name}</td>
                            <td>{musique.author}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}

export default PlayListContent
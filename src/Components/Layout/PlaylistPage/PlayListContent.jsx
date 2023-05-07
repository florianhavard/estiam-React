import { useContext } from "react"
import { Attente } from "../../../App" 

function PlayListContent(props) {

    const myList = useContext(Attente)

    const addMusique = (newMusique)=> {
        myList.addMusiqueToList(newMusique)
    }

    return (
        <table className="content-playlist">
            <thead>
                <tr>
                    <th>&emsp;#</th>
                    <th>Titre</th>
                    <th>Artiste</th>
                </tr>
            </thead>
            <tbody>
                {props.musiques.map((musique) => {
                    return (
                        <tr key={musique.id} onClick={() => addMusique(musique)}>
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
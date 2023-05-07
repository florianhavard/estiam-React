import { useContext, useEffect, useState } from "react"
import { Attente } from "../../../App"

function QueueMusiquePage(){
    const myList = useContext(Attente)
    const [musiques, setMusiques] = useState(myList.listeAttente) 
    useEffect(() => {
        setMusiques(myList.listeAttente);
        console.log("coucou")
    }, [myList.listeAttente])
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
                {musiques.map((musique) => {
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
export default QueueMusiquePage
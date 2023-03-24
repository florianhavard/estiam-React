import {RxShuffle} from 'react-icons/rx'
import { useState } from 'react';

function RandomMusique(props){
    const [couleur, SetCouleur] = useState("white")
    const [randomActive, SetRandomActive] = useState(false)
    const updateState = () => {
        const nextState = !randomActive
        SetRandomActive(nextState)
        switch(nextState){
            case true:
                SetCouleur("#1db954")
                break
            case false:
                SetCouleur("white")
                break
            default:
                console.error("ERROR bouton random")
        }
    }
    return(
        <div className="random-musique" onClick={updateState}>
            <RxShuffle size={props.size} color={couleur}/>
        </div>
    )
}
export default RandomMusique;
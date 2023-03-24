import {BsRepeat1, BsRepeat} from 'react-icons/bs'
import { useState } from 'react'

function RepeatMusique(props){
    const [couleur, SetCouleur] = useState("white")
    const [state, SetState] = useState(0)

    const updateState = () => {
        const nexState = (state + 1) % 3;
        console.log({nexState})
        SetState(nexState)
        switch(nexState){
            case 0:
                SetCouleur("white")
                break
            case 1:
                SetCouleur("#1db954")
                break 
            case 2 :
                SetCouleur("#1db954")
                break
            default:
                console.error("ERROR repeat musique ")
        }
    }
    return(
        <div className="repeat-musique" onClick={updateState}>
            {state === 0 && <BsRepeat size={props.size} color={couleur} />}
            {state === 1 && <BsRepeat size={props.size} color={couleur} />}
            {state ===2 && <BsRepeat1 size={props.size} color={couleur} />}
        </div>
    )
}
export default RepeatMusique
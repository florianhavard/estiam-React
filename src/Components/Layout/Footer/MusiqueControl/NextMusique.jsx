import {BiSkipNext} from 'react-icons/bi'
import {Attente} from "../../../../App";
import { useContext } from 'react';

function NextMusique(props){
    const myList = useContext(Attente)

    const changeMusique =()=> {myList.nextMusique()}

    return(
        <div className="next-musique" onClick={changeMusique}>
            <BiSkipNext size={props.size}/>
        </div>
    )
}
export default NextMusique
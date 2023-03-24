import {BiSkipNext} from 'react-icons/bi'

function NextMusique(props){
    const changeMusique =()=> {console.log("NEXT")}

    return(
        <div className="next-musique" onClick={changeMusique}>
            <BiSkipNext size={props.size}/>
        </div>
    )
}
export default NextMusique
import {BiSkipPrevious} from 'react-icons/bi'

function PreviousMusique(props){
    const changeMusique =()=> {console.log("PREVIOUS")}
    return(
        <div className="previous-musique" onClick={changeMusique}>
        <BiSkipPrevious size={props.size}/></div>
    )
}
export default PreviousMusique
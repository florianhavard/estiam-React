import PlayMusique from "./PlayMusique";
import NextMusique from "./NextMusique";
import PreviousMusique from "./PreviousMusique";
import RandomMusique from "./RandomMusique";
import RepeatMusique from "./RepeatMusique";
import ProgressBarMusique from "./ProgressBarMusique";

function MusiqueControl(props) {
    return (
        <div className="musique-control" >
            <div className="musique-button">
                <RandomMusique size={props.size-10} />
                <PreviousMusique size={props.size} />
                <PlayMusique size={props.size} />
                <NextMusique size={props.size} />
                <RepeatMusique size={props.size-10}/>
            </div>
            <ProgressBarMusique />
        </div>
    )
}
export default MusiqueControl
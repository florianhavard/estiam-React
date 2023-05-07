import { useContext, useEffect, useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillPauseCircleFill } from 'react-icons/bs';
import { Howl, Howler } from 'howler';
import ReactHowler from 'react-howler';
import { Attente } from "../../../../App";

function ControlPlay(props) {
  //liste d'attente des musiques
  const myList = useContext(Attente)

  const [playing, setPlaying] = useState(true);

  const finished = () => {
    myList.nextMusique()
  }

  const changeState = () => {
    setPlaying(!playing);
  }

  useEffect(() => {
    myList.refreshMusique
  }, [myList.musiqueEnCour])

  let logo = playing ? <BsFillPauseCircleFill size={props.size} /> : <BsFillPlayCircleFill size={props.size} />;
  return (
    <div className="play-musique" onClick={changeState}>
      {logo}
      {myList.musiqueEnCour && <ReactHowler src={myList.musiqueEnCour.path} playing={playing} onEnd={finished} />}
    </div>
  );
}

export default ControlPlay;

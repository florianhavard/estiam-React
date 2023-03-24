import { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillPauseCircleFill } from 'react-icons/bs';

function ControlPlay(props) {
  const [state, setState] = useState(false);
  const [logo, setLogo] = useState(<BsFillPlayCircleFill size={props.size}/>);

  const changeState = () => {
    setState(!state);
    switch (state) {
      case true:
        setLogo(<BsFillPlayCircleFill size={props.size} />);
        break;
      case false:
        setLogo(<BsFillPauseCircleFill size={props.size} />);
        break;
      default:
    }
  };

  return (
    <div className="play-musique" onClick={changeState}>
      {logo}
    </div>
  );
}

export default ControlPlay;

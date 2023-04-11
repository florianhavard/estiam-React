import axios from "axios";
import { useEffect, useState } from "react";

function PlaylistHomePage(props){
    const [dataPlaylist, setDataPlaylist] = useState([]);
    const instanceAxios = axios.create({
      baseURL: `http://localhost:3010/`,
      headers: { "Access-Control-Allow-Origin": "*", },
      responseType: "json",
    });
  
    useEffect(() => {
      instanceAxios.get(`playlist/${props.id}`)
        .then(response => {
          setDataPlaylist(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return(
        <div className="playlist-home-page">
            <img src={dataPlaylist.img+"/80/80"} alt="img_playlist" width={80} height={80}/>
            <span>{dataPlaylist.name}</span>
        </div>
    )
}
export default PlaylistHomePage
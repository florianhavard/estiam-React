import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayListContent from "./PlayListContent";
import HeaderPlaylist from "./HeaderPlaylist";
import axios from "axios";

function PlayListPage() {
    const { idPlaylist } = useParams();

    const [data, setData] = useState();
    const instanceAxios = axios.create({
        baseURL: `http://localhost:3010/`,
        headers: { "Access-Control-Allow-Origin": "*", },
        responseType: "json",
    });
    useEffect(() => {
        instanceAxios.get(`playlist/${idPlaylist}`, { params: { idPlaylist } })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [idPlaylist]);

    console.log(data)
    if (data) {

        return (
            <div className="playlist-page">
                <HeaderPlaylist data={data} />
                <PlayListContent musiques={data.musiques} />
            </div>
        )
    }
    else{
        <div>
                Erreur dans l'importation des données de l'API
            </div>
    }
}

export default PlayListPage;

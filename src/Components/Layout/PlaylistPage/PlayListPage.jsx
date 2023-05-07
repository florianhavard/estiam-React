import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayListContent from "./PlayListContent";
import HeaderPlaylist from "./HeaderPlaylist";
import APIPlaylist from "../../../Services/APIPlaylist";

function PlayListPage() {
    const { idPlaylist } = useParams();
    const [data, setData] = useState();

    async function handleChange() {
        try{
            setData(await APIPlaylist.findOne( idPlaylist )) 
        }
        catch (error){
            console.error(error.response)
        }
    }
    useEffect(() => {
        handleChange()
    }, [idPlaylist]);

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

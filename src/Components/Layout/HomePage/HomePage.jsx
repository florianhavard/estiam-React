import { Link } from "react-router-dom"
import HeaderContent from "../HeaderContent"
import PlaylistHomePage from "./PlaylistHomePage"
import { useContext } from "react";
import { ApiContext } from "../../Laysout";

function HomePage() {
    const dataPlaylists = useContext(ApiContext);
    return (
        <div className="home-page" style={{ flexGrow: 1 }}>

            <h1>Bonjour</h1>
            <div className="list-playlists">
                {dataPlaylists.map((data) => {
                    return (
                        <Link key={data.id} to={"/playlist/" + data.id}>
                            <PlaylistHomePage id={data.id}/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage
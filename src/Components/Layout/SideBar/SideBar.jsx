import { Link } from "react-router-dom";
import NavLinkLocal from "./NavLink";
import { BsSpotify } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { TfiBook } from "react-icons/tfi"
import { GoDiffAdded } from "react-icons/go"
import { AiFillHeart } from "react-icons/ai"
import { useContext } from "react";
import { ApiContext } from "../../Laysout";


function SideBar() {
  const dataPlaylists = useContext(ApiContext);
  return (
    <div className="side-bar">
      <div className="side-bar-title">
        <NavLinkLocal logo={<BsSpotify />} text="Spotify" link="/"/>
      </div>
      <div className="side-bar-content">
        <NavLinkLocal logo={<AiFillHome />} text="Accueil" link="/"/>
        <NavLinkLocal logo={<BsSearch />} text="Rechercher" link="/"/>
        <NavLinkLocal logo={<TfiBook />} text="Bibliothèque" link="/"/>
      </div>
      <div className="side-bar-shortcut">
        <NavLinkLocal logo={<GoDiffAdded />} text="Créer une playlist" link="/new_Playlist"/>
        <NavLinkLocal logo={<AiFillHeart />} text="Titres likés" link="/"/>
        <hr />
      </div>
      <div className="side-bar-playlist">
        {dataPlaylists.map((playList) => {
          return (<Link key={playList.id} to={"/playlist/" + playList.id}> <span>{playList.name}</span></Link>)
        })}
      </div>
    </div>
  )
}
export default SideBar;
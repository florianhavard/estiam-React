import NavLinkLocal from "./NavLink";
import { BsSpotify } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { TfiBook } from "react-icons/tfi"
import { GoDiffAdded } from "react-icons/go"
import { AiFillHeart } from "react-icons/ai"


function SideBar() {
  const data = [{ "id": 1, "name": "Alice" }, { "id": 2, "name": "Bob" }, { "id": 3, "name": "Charlie" }, { "id": 4, "name": "David" }, { "id": 5, "name": "Eve" }]

  return (
    <div className="side-bar">
      <div className="side-bar-title">
        <NavLinkLocal logo={<BsSpotify />} text="Spotify" />
      </div>
      <div className="side-bar-content">
        <NavLinkLocal logo={<AiFillHome />} text="Accueil" />
        <NavLinkLocal logo={<BsSearch />} text="Rechercher" />
        <NavLinkLocal logo={<TfiBook />} text="Bibliothèque" />
      </div>
      <div className="side-bar-shortcut">
        <NavLinkLocal logo={<GoDiffAdded />} text="Créer une playlist" />
        <NavLinkLocal logo={<AiFillHeart />} text="Titres likés" />
        <hr />
      </div>
      <div className="side-bar-playlist">
        {data.map((playList) => {
          return (<span key={playList.id}>{playList.name}</span>)
        })}
      </div>
    </div>
  )
}
export default SideBar;
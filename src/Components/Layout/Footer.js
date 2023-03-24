import MusiqueControl from "./Footer/MusiqueControl/MusiqueControl"
import AssetMusique from "./Footer/AssetMusique/AssetMusique"
import RecapMusique from "./Footer/RecapMusique/RecapMusique"

function Footer(){
    const size = 30
    return(
        <div className="footer">
            <RecapMusique size={size} />
            <MusiqueControl size={size} />
            <AssetMusique size={size} />
        </div>
    )
}
export default Footer
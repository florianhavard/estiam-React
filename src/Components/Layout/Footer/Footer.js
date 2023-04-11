import MusiqueControl from "./MusiqueControl/MusiqueControl"
import AssetMusique from "./AssetMusique/AssetMusique"
import RecapMusique from "./RecapMusique/RecapMusique"

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
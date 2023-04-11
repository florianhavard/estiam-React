import {Link,useLocation } from "react-router-dom";
import { HiOutlineQueueList } from 'react-icons/hi2'

function AssetMusique(props){
    return(
        <div className="asset-musique">          
            {useLocation().pathname == "/queue" && <Link to="#" onClick={() => window.history.back()}><HiOutlineQueueList size={props.size - 10}/></Link>}
            {useLocation().pathname != "/queue" && <Link to="/queue"> <HiOutlineQueueList size={props.size - 10}/> </Link>}
        </div>
    )
}
export default AssetMusique
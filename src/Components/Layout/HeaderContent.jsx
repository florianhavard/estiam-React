import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { MdOutlineArrowForwardIos } from "react-icons/md"

function HeaderContent(){
    const back = () => {
        window.history.back()
    }
    const forward = () => {
        window.history.forward()
    }
    return ( 
        <div className="header-app" >
            <div>
            <MdOutlineArrowBackIosNew size={20} onClick={back}/>
            <MdOutlineArrowForwardIos size={20} onClick={forward}/>
            </div>
            <span>USER CONNECTE</span>
        </div>
    )
}
export default HeaderContent
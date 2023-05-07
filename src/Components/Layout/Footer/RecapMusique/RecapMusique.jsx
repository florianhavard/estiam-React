import { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { Attente } from '../../../../App'

function RecapMusique() {
    const myList = useContext(Attente)
    const [liked, SetLiked] = useState(false)
    

    const updateLike = () => {
        SetLiked(!liked)
    }

    useEffect(()=>{
        console.log("coucou")
    },[myList.musiqueEnCour])
    
    if (myList.musiqueEnCour) {

        return (
            <div className="recap-musique">
                <img src={myList.musiqueEnCour.img +"/40/40"} alt="img_musque_en_cours" width={50} height={50} />
                <div className="musique-en-cour">
                    <div>{myList.musiqueEnCour.title}</div>
                    <div>{myList.musiqueEnCour.author}</div>
                </div>
                {liked == true && <AiFillHeart onClick={updateLike} />}
                {liked == false && <AiOutlineHeart onClick={updateLike} />}

            </div>
        )
    }
    else {
        return(
        <div className="recap-musique">
        {console.log("flute"+myList.musiqueEnCour)}
    <img src="/logoSpotify.png" alt="img attente" width={50} height={50} />
    <div className="musique-en-cour">
        <div>Name Song</div>
        <div>Author</div>
    </div> 
    {liked == "true" && <AiFillHeart onClick={updateLike} />}
    {liked == "false" && <AiOutlineHeart onClick={updateLike} />}

</div>)
    }
}
export default RecapMusique
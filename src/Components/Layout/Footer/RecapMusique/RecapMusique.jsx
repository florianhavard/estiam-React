import { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

function RecapMusique(){
    const data = { "id": 1, "title": "Alice", "author": "Rolling Stone", "liked": "true"}
    const [liked, SetLiked] = useState(data.liked)

    const updateLike =()=> {if(liked=="true"){
        SetLiked("false")
    }
else{
    SetLiked("true")
}}

    return(
        <div className="recap-musique">
            <img src="/logo512.png" alt="img_musque_en_cours" width={50} height={50}/>
            <div className="musique-en-cour">
                <div>{data.title}</div>
                <div>{data.author}</div>
            </div>
            {liked == "true" && <AiFillHeart onClick={updateLike} />}
            {liked == "false" && <AiOutlineHeart onClick={updateLike}/>}
            
        </div>
    )
}
export default RecapMusique
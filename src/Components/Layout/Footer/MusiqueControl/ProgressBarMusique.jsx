import { useState } from "react"

function ProgressBarMusique() {
    let x = { "titre": "Shape of You", "artiste": "Ed Sheeran", "album": "÷ (Deluxe)", "année": 2017, "avancement": 2.53, "durée": 3.53, "genre": "Pop", "label": "Atlantic Records", "producteur": "Steve Mac", "compositeurs": ["Ed Sheeran", "Johnny McDaid", "Steve Mac"], "paroliers": ["Ed Sheeran", "Johnny McDaid"] }
    const [musique, UpdateMusique] = useState(x)
    return (
        <div className="progress-bar-musique">
            <span>{musique.avancement}</span>
            <div className="progress-bar">
                <div className="progress" style={{  width: '50%' }}></div>
            </div>
            <span>{musique.durée}</span>
        </div>
    )
}

export default ProgressBarMusique
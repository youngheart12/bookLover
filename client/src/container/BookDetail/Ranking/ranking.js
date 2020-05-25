import React from 'react'

import './ranking.css';
export default function ranking() {
    return (
        <div className="rankingContainer">
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>emoji_events</span><br></br>
            <h2>1</h2>
            Rank last Week<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"#FF80AB",fontSize:"2em"}}>emoji_flags</span><br></br>
            <h2>1</h2>
            Current Rank<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>terrain</span><br></br>
            <h2>June 6,2020</h2>
            Published date<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>note</span><br></br>
            <h2>300</h2>
            Total Page Count<br></br>
            </div>
           
        </div>
    )
}

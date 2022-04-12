import React from "react";
import './index.css'


const Tags = ({ tags, location }) => {

    if (!tags) return null

    return (

        <div className="tags">
            {tags.map(tag => (
                <button key={tag} className="tag">{tag}</button>
            ))}
            <button className="tag">{location}</button>
        </div>

    )
}




export default Tags;
import React from "react";
import './index.css'


const Tags = ({ tags }) => {

    if (!tags) return null

    return (

        <div className="tags">
            {tags.map(tag => (
                <button key={tag} className="tag">{tag}</button>
            ))}
        </div>

    )
}




export default Tags;
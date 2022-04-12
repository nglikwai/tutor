import React from "react";
import './index.css'
import history from "../../../history";
import Tags from "../Tags";
import _ from 'lodash'

const SearchResult = ({ tutor }) => {

    if (!tutor || _.isEmpty(tutor)) return (
        <div><img src='%public/Spinner.svg' /></div>
    );

    return (
        <div onClick={() => history.push(`/tutor/${tutor._id}`)}>
            <div className="item">
                <div className="tutor-intro" >
                    <div className="avator" />
                    <div className="intro">
                        <h3 className="name">{tutor.name}</h3>
                        <div>{tutor.intro}</div>
                    </div>
                </div>

                <div className="details">
                    <Tags tags={tutor.teachingSubjects} location={tutor.location} />

                    <div className="fee">
                        {tutor.teachingSubjectsPrice.map((price, i) => (
                            <li className="list" key={price}>F. {i + 4} : {price}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SearchResult;
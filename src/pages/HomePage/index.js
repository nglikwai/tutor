import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTutorsRequest } from 'redux/actions'
import SearchBox from 'components/SearchBox'
import './index.css';
import Suggestion from "components/Suggestion";


const StreamCreate = () => {

    const dispatch = useDispatch()
    const tutors = useSelector(state => state.tutors.list.tutors)

    useEffect(() => {
        console.log(tutors[0]?.name ?? '')
    }, [tutors])
    useEffect(() => {
        dispatch(fetchTutorsRequest())
    }, [])


    console.log(tutors)
    if (!tutors) return null;

    return (
        <div className="container-box">
            <div className="main-box">
                <h2>尋找補習老師</h2>
                <SearchBox />
            </div>
            <Suggestion tutors={tutors} category='熱門導師' />
            <Suggestion tutors={tutors} category='星級導師' />
            <Suggestion tutors={tutors} category='實惠導師' />
        </div>
    )
}

export default StreamCreate;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTutorsRequest } from 'redux/actions'
import SearchBox from 'components/SearchBox'
import './index.css';
import Suggestion from "components/Suggestion";


const StreamCreate = () => {

    const dispatch = useDispatch()
    const tutors = useSelector(state => state.tutors.list.tutors)
    const selected = useSelector(state => state.select)

    useEffect(() => [tutors])

    useEffect(() => {
        dispatch(fetchTutorsRequest())
    }, [])


    if (!tutors) return null;

    return (
        <div className="container-box">
            <div className="main-box">
                <h2>尋找補習老師</h2>
                <SearchBox selected={selected} />
            </div>
            <Suggestion tutors={tutors} category='熱門導師' />
            <Suggestion tutors={tutors} category='星級導師' />
            <Suggestion tutors={tutors} category='實惠導師' />
        </div>
    )
}

export default StreamCreate;

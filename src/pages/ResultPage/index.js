import React, { useEffect } from "react";
import './index.css';
import SearchResult from "../../components/result/SearchResult";
import UpperBar from "../../components/result/UpperBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTutorsRequest, fetchTutorsWithCriteria, fetchTutorsWithLocation, fetchTutorsWithSubject } from '../../redux/actions'



const ResultPage = (props) => {

    const dispatch = useDispatch()

    const tutors = useSelector(state => state.tutors.list.tutors)
    const isFetching = useSelector(state => state.tutors.list.isFetching)
    const selected = useSelector(state => state.select)

    useEffect(() => {
    }, [])

    if (!tutors) {
        return 'loading'
    }

    return (
        <div className="container-box">
            <UpperBar />
            <div className='right-bar'>
                <h3>你的搜尋結果</h3>

                {isFetching ? 'loading' : tutors.map(tutor => (
                    <SearchResult key={tutor._id} tutor={tutor} />
                ))}



            </div>
        </div>
    )
}

export default ResultPage

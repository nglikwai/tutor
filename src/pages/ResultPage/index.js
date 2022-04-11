import React, { useEffect } from "react";
import './index.css';
import SearchResult from "../../components/result/SearchResult";
import UpperBar from "../../components/result/UpperBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTutorsRequest } from '../../redux/actions'



const ResultPage = () => {

    const dispatch = useDispatch()

    const tutors = useSelector(state => state.tutors.list.tutors)
    const isFetching = useSelector(state => state.tutors.list.isFetching)

    useEffect(() => {
        console.log(tutors[0]?.name ?? '')
    }, [tutors])

    useEffect(() => {
        dispatch(fetchTutorsRequest())
    }, [])

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

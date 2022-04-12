import React, { useEffect } from "react";
import './index.css';
import SearchResult from "../../components/result/SearchResult";
import UpperBar from "../../components/result/UpperBar";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const ResultPage = (props) => {

    const dispatch = useDispatch()

    const tutors = useSelector(state => state.tutors.list.tutors)
    const isFetching = useSelector(state => state.tutors.list.isFetching)
    const selected = useSelector(state => state.select)

    useEffect(() => {
    }, [])

    if (!tutors) {
        return <img src='Spinner.svg' />
    }

    return (
        <div className="container-box">
            <UpperBar />

            <Wrapper>
                <h3>你的搜尋導師</h3>

                {isFetching ? <img src='Spinner.svg' /> : tutors.map(tutor => (
                    <SearchResult key={tutor._id} tutor={tutor} />
                ))}



            </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
`

export default ResultPage

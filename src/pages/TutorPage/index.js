import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTutor } from '../../redux/actions'
import SearchResult from "../../components/result/SearchResult";
import styled from 'styled-components'
import './index.css'
import UpperBar from "../../components/result/UpperBar";
import _ from 'lodash'

const TutorPage = (props) => {

    const dispatch = useDispatch()
    const tutor = useSelector(state => state.tutors.detail)

    useEffect(() => {
        dispatch(fetchTutor(props.match.params.id))
    }, [])

    if (!tutor || _.isEmpty(tutor)) {
        return null
    }

    return (
        <div className="container-box">

            <UpperBar />
            <SearchResult tutor={tutor} />
            <div className="contact">

                {tutor.details.map(detail => (
                    <Detail key={detail}>
                        <div>
                            <img className="point" src='https://d29fhpw069ctt2.cloudfront.net/icon/image/49335/preview.svg' />
                        </div>
                        <div>
                            {detail}
                        </div>
                    </Detail>
                ))}
            </div>
        </div>);
}




const Detail = styled.div`
font-size:16px;
line-height:30px;
width:700px;
margin:20px;
padding:20px;
border:1px solid #ddd;
border-radius:10px;
display:flex;
align-items:center;
`;


export default TutorPage;

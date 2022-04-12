import React from 'react';
import Tutor from '../Tutor';
import './index.css'
import styled from 'styled-components'


const Suggestion = (props) => {
    return (
        <Wrapper>
            <h3>{props.category}</h3>
            <TutortList>
                {props.tutors.map(tutor => <Tutor key={tutor._id} tutor={tutor} />)}
            </TutortList>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    box-sizing:border-box;
    padding:20px;
    width:70%;
`
const TutortList = styled.div`
    overflow-x:scroll;
    display:flex;
    > * {
        flex: 1 0 auto;
    }
`;

export default Suggestion;
import React from "react";
import history from "../../history";
import Tags from "../result/Tags";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Tutor = ({ tutor }) => {

    return (
        <Container>
            <Wrapper>
                <Propic src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />
                <Name>{tutor.name}</Name>
                <Tags />
                <FirstIntro className="first-intro">{tutor.intro}</FirstIntro>
            </Wrapper>
            <StyledLink to={`/tutor/${tutor._id}`} />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const Name = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis; 
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
    color: #aa0000;
    text-shadow:1px 1px 5px rgb(253, 181, 181);
`

const Wrapper = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px 20px;
    width: 150px;
    margin: 5px;
`;


const StyledLink = styled(Link)`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    
`


const Propic = styled.img`
    width: 100px;
    margin: 0 15%;
`;


const FirstIntro = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis; 
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
`


export default Tutor;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selection from "../../Selection";
import './index.css';
import styled from "styled-components";
import history from "../../../history";
import { fetchTutorsRequest, fetchTutorsWithCriteria, genderSelect, priceSelect, fetchTutorsWithLocation, fetchTutorsWithSubject, select } from '../../../redux/actions';



const UpperBar = (props) => {

    const [price, setPrice] = useState(180);


    const dispatch = useDispatch()
    const tutors = useSelector(state => state.tutors.list.tutors)
    const selected = useSelector(state => state.select)

    useEffect(() => [tutors])

    useEffect(() => {
        dispatch(fetchTutorsRequest())
    }, [])


    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch(priceSelect(price))
        }, 700);

        return () => {
            clearTimeout(timerId);
        };
    }, [price]);


    const onChange = (e) => {
        setPrice(e.target.value)
    }

    const onGenderSelect = (checked, gender) => {
        if (checked) {
            dispatch(genderSelect(gender))
        } else {
            dispatch(fetchTutorsRequest())
        }

    }
    const onSearch = () => {
        history.push('/result')
        let query = '';
        selected['地點'].forEach(value => query = query + 'location' + '=' + value + '&');
        selected['科目'].forEach(value => query = query + 'subject' + '=' + value + '&');
        selected.gender.forEach(value => query = query + 'gender' + '=' + value + '&');
        query += `price=${selected.price}`;
        console.log(query);
        dispatch(fetchTutorsWithCriteria(query))
    }


    return (
        <Wrapper>
            <Selection
                label='地點'
                options={['中西區', '東區', '南區', '灣仔', '九龍城', '觀塘', '深水埗', '黃大仙', '油尖旺', '離島', '葵青', '北區', '西貢', '沙田', '大埔', '荃灣', '屯門', '元朗',]}
            />
            <Selection
                label='科目'
                options={['中文', 'eng', 'math', 'ls', 'phy', 'chem', 'bio', 'econ', 'bafs', 'geo', 'history', '中國歷史']}
            />
            <label>學費</label>

            <input type='range' className="range" min={50} max={300} onChange={(e) => onChange(e)} value={price}></input><span className="price">(${price})</span>
            <div className="genders">
                <input onChange={(e) => onGenderSelect(e.target.checked, e.target.id)} type='checkbox' value='男' className="check-box" />
                <label id='m' className="gender">男</label>
                <input id='f' onChange={(e) => onGenderSelect(e.target.checked, e.target.id)} type='checkbox' value='女' className="check-box" />
                <label className="gender">女</label>
            </div>

            <button className="filter">更多篩選</button>

            <Search onClick={() => onSearch()}><i class="fa-solid fa-magnifying-glass"></i></Search>
        </Wrapper>
    )
}


export default UpperBar;

const Wrapper = styled.div`
    border-bottom: 1px solid #eee;
    padding:20px;
    width:800px;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const Search = styled.button`
background-color:#cc0000;
color:white;
border-radiu:5px;
`;
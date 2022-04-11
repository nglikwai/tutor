import React from "react";
import { connect } from "react-redux";
import Selection from "../../Selection";
import './index.css';



class UpperBar extends React.Component {
    state = {
        price: 50
    }

    onChange = (e) => {
        this.setState({ price: e.target.value })

    }
    render() {

        return (
            <div className='upper-bar'>

                <Selection
                    label='地點'
                    options={['中西區', '東區', '南區', '灣仔', '九龍城', '觀塘', '深水埗', '黃大仙', '油尖旺', '離島', '葵青', '北區', '西貢', '沙田', '大埔', '荃灣', '屯門', '元朗',]}
                />
                <Selection
                    label='科目'
                    options={['中文', '數學', '化學']}
                />
                <label>學費</label>

                <input type='range' className="range" min={50} max={500} onChange={(e) => this.onChange(e)}></input><span className="price">(${this.state.price})</span>
                <div className="genders">
                    <input type='checkbox' value='男' className="check-box" />
                    <label className="gender">男</label>
                    <input type='checkbox' value='女' className="check-box" />
                    <label className="gender">女</label>
                </div>

                <button className="filter">更多篩選</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { select: state.select }
}
export default connect(mapStateToProps)(UpperBar);
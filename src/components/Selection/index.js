import React from "react";
import { select } from "../../redux/actions";
import './index.css';
import { connect } from "react-redux";
import history from "../../history";



class Selection extends React.Component {

    onSelect = (label, value) => {
        this.props.select(label, value)
    }

    renderOption = () => this.props.options.map(option => {
        return (
            <option key={option}>{option}</option>
        )
    })

    render() {

        return (
            <div>  <label className="label">{this.props.label}</label>
                <select onChange={(e) => this.onSelect(this.props.label, e.target.value)} defaultValue={`${this.props.selection[this.props.label]}`}>
                    {this.renderOption()}
                </select>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return { selection: state.select }
}


export default connect(mapStateToProps, { select })(Selection);


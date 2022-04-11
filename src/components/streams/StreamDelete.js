import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from '../../history'
import { connect } from "react-redux";
import { fetchStreams, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStreams(this.props.match.params.id)
    }
    renderActions() {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className='ui negative button'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }
    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure to delete?'
        }
        return `Are you sure to delete - title : ${this.props.stream.title}`
    }
    render() {
        return (
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStreams, deleteStream })(StreamDelete);
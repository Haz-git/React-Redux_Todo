import React from 'react';
import { connect } from 'react-redux';

const List = ({ todo }) => {
    return (
        <div>
            {todo.map(e => {
                return <div>{e.todo}</div>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.todos
    }
}

export default connect(mapStateToProps)(List);
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/TodoActions';

const Action = (props) => {
    const { todos } = props;
    return (
        <React.Fragment>
            <button className="main-btn" onClick={() => handleSelection(todos, props)}>What Should I Do?</button>
        </React.Fragment>
    );
};

const handleSelection = (todos, props) => {
    const randomNum = Math.floor(Math.random() * todos.length);
    props.openModal(randomNum);
};

const mapStateToProps = state => ({
    todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
    openModal: (todoIndex) => dispatch(openModal(todoIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
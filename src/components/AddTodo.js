import React from 'react';
import { connect } from 'react-redux';
import { addTodo, error } from '../actions/TodoActions';

const AddTodo = (props) => {
    const { errorMsg } = props;
    return (
        <div>
            {errorMsg && <p>{errorMsg}</p>}
            <form onSubmit={(e) => handleAddOption(e, props)}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
};

const handleAddOption = (e, props) => {
    e.preventDefault();
    const value = e.target.elements.option.value.trim();
    
    if (!value) {
        props.error("Please enter a valid value to add item.");
    } else {
        e.target.elements.option.value = '';
        props.addTodo(value);
    }

};

const mapStateToProps = state => ({
    todos: state.todo.todos,
    errorMsg: state.todo.errorMsg
});

const mapDispatchToProps = dispatch => ({
    addTodo: (value) => dispatch(addTodo(value)),
    error: (msg) => dispatch(error(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
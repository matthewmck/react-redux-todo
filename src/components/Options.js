import React from 'react';
import Option from './Option';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { deleteTodos } from '../actions/TodoActions';


const Options = (props) => {
  
  const { todos } = props;

  return (
    <React.Fragment>
      <div className="option-header">
        <span>Your Options</span>
        <button onClick={props.deleteTodos}>Remove All</button>
      </div>
      <div className="option-body">
        {todos.length === 0 && <p>Please add an option to get started!</p>}
        {todos.map(todo => (
          <Option
            key={uuid()}
            todo={todo}
          />
        ))}
      </div>
    </React.Fragment> 
  );
  
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  deleteTodos: () => dispatch(deleteTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
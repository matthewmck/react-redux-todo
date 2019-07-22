import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/TodoActions';

const Option = props => {
  const { todo } = props;
  return (
    <div>
      {todo}
      <button onClick={() => deleteItem(todo, props)}>Remove</button>
    </div>

  );
}

const deleteItem = (todo, props) => {
  props.deleteTodo(todo);
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(Option);

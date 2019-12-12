import React, { useState } from 'react';
import { TodoItem, Bar } from '../../components';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const TodoList = ({ defaultValues, setNotification, ...props }) => {
  const [todos, setTodos] = useState(defaultValues);

  const onSubmit = value => {
    if (!value && value === '') {
      // validation error message
      setNotification([{ header: 'FILL THE INPUT', type: 'negative' }]);
      return false;
    }

    const newEntry = {
      id: shortid.generate(),
      name: value,
      updated_at: new Date(),
      complete: false
    };
    setTodos([...todos, newEntry]);
    // success message
    setNotification([{ header: 'New item added', type: 'positive' }]);
    return true;
  };

  const onClick = id => {
    const todoItems = [...todos];
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === id) {
        const isCompleted = !todoItems[i].complete;
        todoItems[i].updated_at = new Date();
        todoItems[i].complete = isCompleted;
        setNotification([
          {
            header: isCompleted ? 'Good job!' : "You'll get there!",
            type: 'positive'
          }
        ]);
      }
    }
    setTodos(todoItems);
  };

  const handleDelete = id => {
    setNotification([{ header: 'Item deleted succesfully', type: 'positive' }]);
    let remainingEntries = todos.filter(item => item.id !== id);
    setTodos(remainingEntries);
  };

  const generateItems = () => {
    return todos.map(item => (
      <TodoItem
        key={item.id}
        data={item}
        onSubmit={onSubmit}
        onDelete={handleDelete}
        onClick={onClick}
      />
    ));
  };

  return (
    <div className="ui segment">
      <h1 className="ui center aligned header">TODO LIST</h1>
      <Bar onSubmit={onSubmit} />
      <div className="ui middle aligned selection divided very relaxed list">
        {generateItems()}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  defaultValues: PropTypes.array,
  setNotification: PropTypes.func // this is a cop out to save time. In an actual product, i would handle notifications globally.
};

TodoList.defaultProps = {
  defaultValues: []
};

export default TodoList;

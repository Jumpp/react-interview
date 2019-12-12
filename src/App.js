import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoList } from './components';

const todos = [
  {
    id: 1,
    name: 'Go to the supermarket',
    complete: false,
    updated_at: new Date(0)
  },
  {
    id: 2,
    name: 'Call Alice',
    complete: false,
    updated_at: new Date(1000000000000)
  },
  {
    id: 3,
    name: 'Ask Alice to call Bob',
    complete: false,
    updated_at: new Date(1100000000000)
  },
  {
    id: 4,
    name: 'Do the dishes',
    complete: false,
    updated_at: new Date(1200000000000)
  },
  {
    id: 5,
    name: 'Change car tyres',
    complete: false,
    updated_at: new Date(1300000000000)
  }
];

const App = () => {
  // hooks
  const [notifications, setNotifications] = useState([]);
  // effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([]);
    }, 1500);
    return () => clearTimeout(timer);
  }, [notifications]);

  return (
    <div className="ui container page-container">
      <TodoList setNotification={setNotifications} defaultValues={todos} />
      {notifications.map((item, idx) => {
        return (
          <div key={idx} className={`ui ${item.type} message`}>
            <i className="close icon" onClick={() => setNotifications([])} />
            <div className="header">{item.header}</div>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        );
      })}
    </div>
  );
};
export default App;

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

const Bar = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  return (
    <form
      className="ui form"
      onSubmit={e => {
        e.preventDefault();
        if (value && value.length > 0) {
          onSubmit(value);
          setValue('');
        } else {
          setError('input empty');
        }
      }}
    >
      <div className={`field ${error ? 'error' : ''}`}>
        <div className="ui fluid action input">
          <input
            placeholder="Add new todo"
            value={value}
            onChange={e => {
              setValue(e.target.value);
              setError(false);
            }}
          />
          <button className="ui button " type="submit" value="Submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

Bar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default memo(Bar);

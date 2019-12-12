import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

const TodoItem = ({ data, onClick, onDelete }) => {
  return (
    <div className="item">
      <div className="right floated content">
        <button className="ui icon button" onClick={() => onDelete(data.id)}>
          <i className="trash icon" />
        </button>
      </div>
      <i
        className={`big ${data.complete ? 'check' : ''} circle outline icon`}
        onClick={() => onClick(data.id)}
      />
      <div
        className="ui middle aligned content"
        onClick={() => onClick(data.id)}
      >
        <div className="header">{data.name}</div>
        {data.updated_at && (
          <div className="content">
            last updated {<ReactTimeAgo date={data.updated_at} />}
          </div>
        )}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default memo(TodoItem);

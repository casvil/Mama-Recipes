import React from 'react';

import './suggestions.css';

const Suggestions = props => {
  const suggestions = props.suggestions.map((suggestion, id) => (
    <li className="suggestions__item" key={id}>
      {suggestion.name}
    </li>
  ));

  if (props.active) return <ul className="suggestions__list">{suggestions}</ul>;

  return <div style={{ display: 'none' }} />;
};

export default Suggestions;

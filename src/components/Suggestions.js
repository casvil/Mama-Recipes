import React from 'react';

const Suggestions = props => {
  const suggestions = props.suggestions.map((suggestion, id) => (
    <li key={id}>{suggestion.name}</li>
  ));

  if (props.active) return <ul>{suggestions}</ul>;

  return <div style={{ display: 'none' }} />;
};

export default Suggestions;

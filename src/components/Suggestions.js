import React from 'react';

const Suggestions = props => {
  const suggestions = props.suggestions.map(suggestion => (
    <li key={suggestion.name}>{suggestion.name}</li>
  ));
  return <ul>{suggestions}</ul>;
};

export default Suggestions;

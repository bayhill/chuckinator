import React from 'react';

const Chuck = (props) => {
  const { joke } = props;
  if (!joke || joke.length === 0) return <p>No joke today, sorry :(</p>;
  return (
    <p>
            <img src={joke.icon_url} alt="chuck"></img>
            <span className='joke-description'>{joke.value}</span>
    </p>
  );
};
export default Chuck;
import React from 'react';

function ChuckLoading(Component) {
  return function ChuckLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching a Chuck Norris joke for you.. :)
      </p>
    );
  };
}
export default ChuckLoading;
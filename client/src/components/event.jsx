import React from 'react';

const event = () => {
  console.log('event component fired');
  return (
    <div>
      <h1>Event Page</h1>
      <button type="button">Back to Travel</button>
    </div>
  );
};

export default event;

import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Spinner animation="border" variant="dark" role="status" />
    </div>
  );
};

export default Loading;
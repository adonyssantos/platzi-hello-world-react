import React from 'react';

const HolaMundo = () => {
  const Hello = 'Hello world';
  const ImageUrl = 'https://arepa.s3.amazonaws.com/react.png';
  const isTrue = true;

  return (
    <div className='HolaMundo'>
      <h1>{Hello}</h1>
      <h2>Curso React</h2>
      <img src={ImageUrl} />
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
};

export default HolaMundo;

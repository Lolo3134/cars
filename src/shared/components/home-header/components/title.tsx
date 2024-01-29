import React from 'react';
import Typewriter from 'typewriter-effect';

export const Title = () => {
  return (
    <Typewriter
      options={{
        strings: ['Easy Ride – is for Freedom'],
        autoStart: true,
        loop: true,
        delay: 300,
        deleteSpeed: 100,
      }}
    />
  );
};
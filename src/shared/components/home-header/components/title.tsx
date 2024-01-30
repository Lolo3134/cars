import React, { FC } from 'react';
import Typewriter from 'typewriter-effect';

interface TitleProps {
  value: string;
}

export const Title: FC<TitleProps> = ({ value }) => {
  return (
    <Typewriter
      options={{
        strings: [value],
        autoStart: true,
        loop: true,
        delay: 300,
        deleteSpeed: 100,
      }}
    />
  );
};
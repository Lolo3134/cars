import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { VerificationFormProps } from './verification-form.types';
import s from './verification-form.module.scss';

export const VerificationForm:FC<VerificationFormProps> = ({ email }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);

    if (newCode[index].length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={s.wrapper}>

      <div className={s.badge}>We sent the code to the email {email}</div>
      <div className={s.code__wrapper}>
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(event) => handleChange(event, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            onKeyDown={(event) => handleKeyPress(event, index)}
            className={s.code_item}
          />
        ))}
      </div>
    </div>
  );
};
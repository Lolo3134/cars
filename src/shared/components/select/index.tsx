import React, { useState, useRef } from 'react';
import './select.css';

interface CustomSelectProps {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return (
    <div className="center" ref={ref}>
      <div className={`custom-select ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="custom-select-trigger">{selected || 'Filter 001'}</span>
        <div className="custom-options">
          {options.map((option, index) => (
            <span
              key={index}
              className={`custom-option ${selected === option ? 'selection' : ''}`}
              data-value={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;

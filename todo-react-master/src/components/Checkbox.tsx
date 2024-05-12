import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;

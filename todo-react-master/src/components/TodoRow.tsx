import React from 'react';
import Button from './Button';
// import Checkbox from './Checkbox';
import './TodoRow.css';

interface TodoRowProps {
  label: string;
  checked: boolean;
  onCheckboxChange: (checked: boolean) => void;
  onDeleteButtonClick: () => void;
}

const TodoRow: React.FC<TodoRowProps> = ({ label, checked, onCheckboxChange, onDeleteButtonClick }) => {
  return (
    <div className="todo-row">
        <div className="left">
     <button
        className="circle-button" 
        onClick={() => onCheckboxChange(!checked)}
        style={{ backgroundColor: checked ? '#4CAF50' : '#fff', border: checked ? '2px solid #4CAF50' : '2px solid #808080'}} // Change background color based on checked state
      />
      <span className={`todo-label ${checked ? 'completed' : ''}`}>{label}</span>
      </div>
      <div className="right">
      <Button variant="small" onClick={onDeleteButtonClick}>X</Button>
      </div>
    </div>
  );
};

export default TodoRow;

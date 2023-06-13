import React from 'react';

function RemoveItem({ item, onRemove }) {
  const handleRemove = () => {
    const confirmRemoval = window.confirm(`Are you sure you want to remove "${item}"?`);
    if (confirmRemoval) {
      onRemove(item);
    }
  };

  return (
    <div className="remove-item">
      <span>{item}</span>
      <button className="remove-ingredient" onClick={handleRemove}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default RemoveItem;

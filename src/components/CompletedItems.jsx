// CompletedItems.js
import React from 'react';
import ListItem from './ListItem';

const CompletedItems = ({ items, onToggleCheckbox, onRemoveItem }) => {
  return (
    <ul className="h-100 m-0">
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          isChecked={true}
          onToggleCheckbox={() => onToggleCheckbox(index)}
          onRemoveItem={() => onRemoveItem(index)}
        />
      ))}
    </ul>
  );
};

export default CompletedItems;

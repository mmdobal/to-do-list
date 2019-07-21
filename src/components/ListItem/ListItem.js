import React, { useCallback } from 'react';

const Button = ({ text, onClick }) => (
  <button className="btn" onClick={onClick}>{text}</button>
);


const ListItem = React.memo(({ item, onDelete, onToggle }) => {

  const toggleStatus = useCallback(() => onToggle(item));
  const deleteItem = useCallback(() => onDelete(item._id));

  const toggleBtn = item.status === 'done'
    ? <Button text="Undo" onClick={toggleStatus} />
    : <Button text="Done" onClick={toggleStatus} />;

  return (
    <li className="list-item">
      {item.name}
      <div className="btn-block">
        {toggleBtn}
        <Button text="Delete" onClick={deleteItem} />
      </div>
    </li>
  );
});

export default ListItem;

import React, { useCallback } from 'react';

const Button = ({ text, onClick, btnClass }) => (
  <button className={btnClass} onClick={onClick}>{text}</button>
);


const ListItem = React.memo(({ item, onDelete, onToggle }) => {

  const toggleStatus = useCallback(() => onToggle(item));
  const deleteItem = useCallback(() => onDelete(item._id));

  const toggleBtn = item.status === 'done'
    ? <Button btnClass="btn btn-toggle" text="Undo" onClick={toggleStatus} />
    : <Button btnClass="btn btn-toggle" text="Done" onClick={toggleStatus} />;

  return (
    <li className="list-item">
      <h3>
        {item.name}
      </h3>
      <div className="btn-block">
        {toggleBtn}
        <Button btnClass="btn btn-del" text="Delete" onClick={deleteItem} />
      </div>
    </li>
  );
});

export default ListItem;

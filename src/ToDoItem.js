import React from "react";
import "./ToDoItem.scss";

const completedItemStyle = {
  color: "grey",
  textDecoration: "line-through"
};

export default function ToDoItem({
  innerRef,
  draggableProps,
  dragHandleProps,
  dragStyle,
  item,
  index,
  handleCheck
}) {
  return (
    <div
      className="todo-item-container"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      style={dragStyle}
    >
      <span
        className="todo-description-text"
        style={item.completed ? completedItemStyle : {}}
      >
        {item.details}
      </span>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(index)}
      />
    </div>
  );
}

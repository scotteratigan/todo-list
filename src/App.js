import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Header from "./Header";
import Button from "./Button";
import ToDoItem from "./ToDoItem";
import todoList from "./todoData";
import "./App.scss";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "#333" : "#eee",
  ...draggableStyle // required for drag to function correctly
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "rgba(0, 0, 0, 0)"
});

function App() {
  const [numItemsVisible, setNumItemsVisible] = useState(5);
  const [items, setItems] = useState(todoList);

  function handleIncreaseItemsVisible() {
    setNumItemsVisible(numItemsVisible + 5);
  }

  function onDragEnd(result) {
    if (!result.destination) return;
    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  }

  function handleCheck(index) {
    const newItems = [...items];
    const updatedItem = newItems[index];
    updatedItem.completed = !updatedItem.completed;
    newItems[index] = updatedItem;
    setItems(newItems);
  }

  return (
    <div className="todos-container">
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.slice(0, numItemsVisible).map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <ToDoItem
                      innerRef={provided.innerRef}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                      dragStyle={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      item={item}
                      index={index}
                      handleCheck={handleCheck}
                    ></ToDoItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* "Show More" button only if there are more todos to display: */}
      {numItemsVisible < todoList.length && (
        <Button
          text="Show More"
          onClick={handleIncreaseItemsVisible}
          style={{ display: "block", width: "80%", margin: "10px auto" }}
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ lista, onComplete, onDelete }) {
  return (
    <section id="list">
      {lista.map((tarea) => (
        <TodoItem
          key={tarea.id}
          tarea={tarea}
          onComplete={() => onComplete(tarea.id)}
          onDelete={() => onDelete(tarea.id)}
        />
      ))}
    </section>
  );
}

export default TodoList;

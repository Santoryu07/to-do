import React from 'react';

function TodoItem({ tarea, onComplete, onDelete }) {
  return (
    <div id="tarea">
      <div id='task' className={` ${tarea.completada ? 'tarea-completada' : ''}`}>
        <input
          type="checkbox"
          onChange={onComplete}
        />
        <li>{tarea.texto}</li>
      </div>
      <button id="eli" className="btn btn-outline-danger" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
}

export default TodoItem;

import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [texto, setTexto] = useState('');

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onAdd(texto);
      setTexto('');
    }
  }

  return (
    <div className="up">
      <h1>
        <strong>Todo App</strong>
      </h1>
      <input
        type="text"
        onChange={(e) => setTexto(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        value={texto}
        placeholder="Nueva Tarea"
        className="form-control is-valid input-group input-group-sm mb-1 mt-2"
        aria-label="Sizing example input"
      />
      <button id="agre" onClick={() => { onAdd(texto); setTexto(''); }} className="btn btn-outline-success">
        <strong>Agregar</strong>
      </button>
    </div>
  );
}

export default TodoInput;

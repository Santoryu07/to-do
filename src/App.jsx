import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [lista, setLista] = useState([]);
  const [visible, setVisible] = useState(true);




  function añadir(texto) {
    if (texto.trim() !== '') {
      const nuevaTarea = { id: Date.now(), texto: texto, completada: false };
      setLista([...lista, nuevaTarea]);
    }
  }



  function mostrar() {
    setVisible(!visible);
  }

  function eliminar(id) {
    setLista(lista.filter((tarea) => tarea.id !== id));
  }

  function toggleCompletada(id) {
    const updatedLista = lista.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setLista(updatedLista);
  }

  return (
    <>
      <TodoInput onAdd={añadir} />
      <section className="bottom">
        <div className="sub">
          <p>
            <strong>Cosas por hacer :</strong>
          </p>
          <button id="mues" onClick={mostrar} className="btn btn-success">
            <p>{visible ? '▲' : '▼'}</p>
          </button>
        </div>
        {visible && (
          <TodoList lista={lista} onComplete={toggleCompletada} onDelete={eliminar} />
        )}
      </section>
    </>
  );
}

export default App;

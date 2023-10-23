import { useState } from 'react'
import './App.css'



function App() {
  const [lista, setLista] = useState([])
  const [texto, setTexto] = useState('')
  const [visible, setVisible] = useState(true)

  function añadir(){
    const nuevaTarea = { id: Date.now(), texto: texto, completada: false };
    setLista([...lista,nuevaTarea]) 
    setTexto('');
  }

  function mostrar() {
    const lista = document.getElementById('list');
    setVisible(!visible)
    if(!visible){
      lista.style = "display:none";
    }else{
      lista.style = "display:block";
    }
  }

  function eliminar(id){
    setLista(lista.filter((tarea) => tarea.id !== id));
  }


  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      añadir();
    }
  }

  return (
    <>
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
          class="form-control is-valid input-group input-group-sm mb-1 mt-2"
          aria-label="Sizing example input"
        />

        <button id="agre" onClick={añadir} class="btn btn-outline-success">
          <strong>Agregar</strong>
        </button>
      </div>

      <section className="bottom">
        <div className="sub">
          <p>
            <strong>Cosas por hacer :</strong>
          </p>
          <button id="mues" onClick={mostrar} class="btn btn-success">
            ▼
          </button>
        </div>


          <section id="list">
            {lista.map((tarea) => {
              return (
                <div id="tarea" key={tarea.id}>
                  <div
                    id="task"
                    className={` ${tarea.completada ? "tarea-completada" : ""}`}
                  >
                    <input
                      type="checkbox"
                      onChange={() => {
                        const updatedLista = lista.map((t) =>
                          t.id === tarea.id
                            ? { ...t, completada: !t.completada }
                            : t
                        );
                        setLista(updatedLista);
                      }}
                    />

                    <li>{tarea.texto}</li>
                  </div>

                  <button
                    id="eli"
                    class="btn btn-outline-danger "
                    onClick={() => eliminar(tarea.id)}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })}
          </section>

      </section>

    </>
  );
}

export default App

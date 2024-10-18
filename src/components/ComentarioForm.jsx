import { React, useState } from 'react';
import Card from './Card';
import ComentarioCalificaion from './ComentarioCalificacion';

const ComentarioForm = ({ handleAdd }) => {

    const [text, setText] = useState('');
    const [calificacion, setCalificacion] = useState(0);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear el objeto comentario con un id único
        const newComentario = {
            id: Date.now(),  // Asigna un id único utilizando la fecha y hora actual
            comentario: text,
            calificacion: calificacion
        };

        // Llama a handleAdd para agregar el nuevo comentario
        handleAdd(newComentario);

        // Limpiar el formulario después de agregar el comentario
        setText('');
        setCalificacion(0);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <ComentarioCalificaion select={(calificacion) => { setCalificacion(calificacion) }} />
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder='Ingrese su Comentario aqui'
                    />
                    <button type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default ComentarioForm;

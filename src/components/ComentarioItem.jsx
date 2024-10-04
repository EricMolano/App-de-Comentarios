import {React, useState} from 'react';

const ComentarioItem = ({ comentario, calificacion}) => {

  // Manejo de estado como comentario:
  //comentario y calificacion como atributos
  // mediante el uso de Estados 
    const [ comment, setComent ] = useState(comentario)
    const [ rating, setRating ] = useState(calificacion)
    const cambiarRating= () => {
        setRating((prev) => prev + 1 )
    }

    return (
        <div className="card">
            <div className='num-display'>
                {rating}
            </div>
            <div className='text-display'>{ comment }</div>
            <button onClick={cambiarRating}>
                Cambiar calificacion: 
            </button>
        </div>
    )
}
export default ComentarioItem
import {React, useState} from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa'

const ComentarioItem = ({ comentario, calificacion, id, handleDelete}) => {

  // Manejo de estado como comentario:
  //comentario y calificacion como atributos
  // mediante el uso de Estados 
    const [ comment, setComent ] = useState(comentario)
    const [ rating, setRating ] = useState(calificacion)
    const [ identificacion ,
            setIdentificacion ] = useState(id)


    return (
        <Card reverse = {false}>
            <div className='num-display'>{ rating }</div>
            <button onClick={ () => handleDelete(identificacion )}
            className="close">
            <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{ comment }</div>
        </Card>
    )
}
export default ComentarioItem
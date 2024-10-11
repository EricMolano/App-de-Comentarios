import React from 'react';

const ComentarioStats = ({ comentarios }) => {
    const totalComentarios = comentarios.length;

    const calificacionPromedio = 
        totalComentarios > 0
        ? comentarios.reduce((total, comentario) => total + parseFloat(comentario.calificacion), 0) / totalComentarios
        : 0;

    return (
        <div className='feedback stats'>
            <h4> Comentarios: {totalComentarios} </h4>
            <h4> Calificación promedio: {calificacionPromedio.toFixed(1)} </h4>
        </div>
    );
};

export default ComentarioStats;

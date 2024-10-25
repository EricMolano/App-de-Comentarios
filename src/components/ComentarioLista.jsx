import {React, useContext} from 'react';
import ComentarioItem from './ComentarioItem';
import { AnimatePresence, motion } from 'framer-motion';
import ComentariosContexto from '../contexto/ComentariosContexto';



function ComentarioLista() {

    const { comments } = useContext(ComentariosContexto)


  if (comments.length === 0 || !comments) {
    return <p>No hay comentarios</p>;
  } else {
    return (
      <div>
        <div className='comments'>
          <AnimatePresence>
            <ul>
              {comments.map(comentario => (
                <motion.li
                  key={comentario.id}
                  initial={{ opacity: 0, scale: 0.8, y: -20, rotate: -5 }} // Añadiendo rotación
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }} // Rotación y escala al aparecer
                  exit={{ opacity: 0, scale: 0.9, y: 20, rotate: 5 }} // Rotación y desplazamiento al salir
                  transition={{ duration: 0.5, ease: 'easeInOut' }} // Duración más larga para un efecto más suave
                >
                  <ComentarioItem 
                    key={comentario.id}
                    comentario={comentario}
                  />
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        </div>
      </div>
    );
  }
}

export default ComentarioLista;

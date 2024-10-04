import {React , useState} from 'react'
import Header from './components/Header'
import ComentarioItem from './components/ComentarioItem';
import comentarios from './data/Comentarios';

function App() {

    const [comments ,
         setComments] = useState(comentarios)

    const titulo = "App de Comentarios";
    const Autor = "Eric Molano"
    const ficha = "2902093"
    const centrodeformacion = "Centro de Gestion de Mercados, Logistica y Tecnologias de la informacion"

   
    const loading = false;
    const showComments = true;
    if (loading === true) return (<h1> Cargando Comentarios...</h1>)

  return (
    <div className='container'>

        <Header titulo={ titulo } autor={Autor} ficha={ficha} centrodeformacion={centrodeformacion} />

        { showComments &&
    (

        <div className='comments'>
        <h3> Comentarios: {comentarios.length} </h3>
        <ul>
            {
                comments.map(comentario => 
                    <ComentarioItem key={comentario.id}
                    comentario={comentario.comentario}
                    calificacion={comentario.calificacion}
                     />
            )
            }
        </ul>
    </div>
    )

  }
    
</div>
  )

}
export default App
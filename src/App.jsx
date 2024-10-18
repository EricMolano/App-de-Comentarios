import { React , useState } from 'react'
import Header from './components/Header'
import ComentarioItem from './components/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './components/ComentarioLista';
import Card from './components/Card';
import ComentarioStats from './components/ComentarioStats';
import ComentarioForm from './components/ComentarioForm';

function App() {

    const [comments 
        , setComments] 
        = useState(comentarios)

    const borrarItem=id=>  {
          if (window.confirm
            ('Esta seguro de borrar el comentario?')) {
          //asignar: nuevo estado a comments:
          //filter: para quitar los comentarios
          //cuyo id concuerde con el parametro
          setComments (comments.filter((c) => c.id !== id ))
            }
          }
          

    const titulo = "App de Comentarios";
    const Autor = "Eric Molano"
    const ficha = "2902093"
    const centrodeformacion = "CGMLTI"

   
    const loading = false;
    if (loading === true) return (<h1> Cargando Comentarios...</h1>)

      const addComentario = (newComentario) => {
        // Utiliza el operador spread para añadir el newComentario a la lista de comentarios
        setComments([ ...comments, newComentario ]);
      }
      

  return (
    <div className='container'>

        <Header 
        titulo={ titulo } 
        autor={Autor} 
        ficha={ficha} 
        centrodeformacion={centrodeformacion} />
        <ComentarioForm handleAdd={ addComentario }/>
        <ComentarioStats comentarios={comments} />
        <ComentarioLista comments={comments}
                        handleDelete={borrarItem} />

    </div>
  )

}
export default App
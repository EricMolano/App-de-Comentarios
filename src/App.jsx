import { React , useState } from 'react'
import Header from './components/Header'
import comentarios from './data/Comentarios';
import ComentarioLista from './components/ComentarioLista';
import ComentarioStats from './components/ComentarioStats';
import ComentarioForm from './components/ComentarioForm';
import About from './pages/About';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';
function App() {

    const [comments 
        , setComments] 
        = useState(comentarios)


          

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
    <ComentariosProvider>
          <Router>
    <div className='container'>

        <Header 
        titulo={ titulo } 
        autor={Autor} 
        ficha={ficha} 
        centrodeformacion={centrodeformacion} />
        <Routes>
          <Route exact path="/" element={
            <>
        <ComentarioForm handleAdd={ addComentario }/>
        <ComentarioStats />
        <ComentarioLista />
        <AboutIconLink />
            </>

          } >

          </Route>
          <Route path="/about" element={
        <About titulo={titulo} autor={Autor} ficha={ficha} />

          }></Route>
        </Routes>


    </div>
    </Router>
    </ComentariosProvider>

  )

}
export default App
import React from 'react';
import Card from '../components/Card';
import HomeIconLink from '../components/HomeIconLink';

const About = ({ titulo, autor, ficha }) => {
  return (
    <div>
      <Card>
        <div className='about'>
          <HomeIconLink />
          <h1>Acerca de este proyecto</h1>
          <h3>Esta es una app en React</h3>
          <p><b>Titulo:</b> {titulo}</p>
          <p><b>Autor:</b> {autor}</p>
          <p><b>Ficha:</b> {ficha}</p>
          <p><b>Version:</b> 1.0.0</p>
          <p>
            <a href="/"> Volver a la página de inicio </a>
        </p>
    </div>
      </Card>
    </div>
  );
}

export default About;

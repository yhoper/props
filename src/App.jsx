import react from 'react'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {
  const comentarioTitle='Este es el título de mi primer comentario'
  const comentarioImage='https://i.blogs.es/2418f7/googlefotosespacio/450_1000.jpg'
  const comentarioText='Aquí va el texto del contenido dentro de mi componente'

  return (
    <div className="container mt-5">
      <h1 className="text-succes">Easy Pros</h1>
      <Saludo name='Gio' age={25}/>
      <Saludo name='Leo' age={35}/>
      <Saludo name='Julian' age={15}/>
      <Comentario title={comentarioTitle} img={comentarioImage} text={comentarioText}/>
    </div>
  );
}

export default App;

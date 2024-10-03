import { useState } from 'react';
import './App.css';
import { UsarContextoGeral } from './contexto/contexto.jsx';
import { Outlet, Link } from 'react-router-dom';
import userlogo from './images/userPic.jpeg';

function App() {
  const [user, setUser] = useState('Entrar')

  return (
    <div className="App">
      <header className='main-header'>
        <nav>
          <a href='#'>Loren</a>
          <a href='#'>Ipsum</a>
        </nav>
        <h2>Bem-vindo!</h2>
        <Link to='criarUsuario' className='link'>
          <div>
            <p>{user}</p>
            <img alt='foto de usuario' src={userlogo}/>
          </div>
        </Link>
      </header>
      <div className="App">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;

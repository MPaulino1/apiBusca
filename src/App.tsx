import { useState } from 'react';
import api from './services/api';

import './App.css';
interface Result {
  Titulo?: any,
  Link?: any
}

function App() {
  const [result, setResult] = useState<Result[]>();
  const [search, setSearch] = useState('');

  function handleSearch() {
    api.get('', {
      params:
        { search: search }
    })
      .then((res) => {
        const results = res.data;
        const data = results.Resultados;
        setResult(data);
      }).catch((err) => {
        console.log('Erro ao acessar rota de busca: ', err);
      })
  }

  return (
    <div className='container-app'>

      <div className='container-title'>
        <input placeholder="Digite sua busca..." value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {
        result ? result.map(e =>
        (
          <div className='container-card'>
            {e.Titulo}
            <a href={e.Link} target="_blank\">
              {e.Link}
            </a>
          </div>
        )

        ) : <></>
      }

    </div>
  );
}

export default App;

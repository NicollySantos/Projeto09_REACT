
import b8 from './img/b8.png';
import './App.css';

function App4() {
  return (
    <div className="App">
      <header className="App-header">
        <p1>7° Lugar - Mato Grosso</p1>
        <img src={b8} className="bandeira" alt="bandeira" />
        <br />
        <p2>Localizado na região Centro-Oeste do Brasil, o Mato Grosso fecha o pódio dos <br/>
        maiores estados do país, ficando em terceiro lugar. O estado conta com aproximadamente <br/>
        903 milhões de km², e área urbana com cerca de 519 km², isso significa que possui <br/>
        em torno de 3 habitantes por km². Além disso, o Mato Grosso faz fronteira com seis <br/>
        estados brasileiros e com a Bolívia, país que não é muito maior que o estado em <br/>
        questão. Boa parte das terras desse estado são dedicadas à agricultura, sendo o <br/>
        principal exportador de soja do país.</p2>
      </header>
    </div>
  );
}

export default App4;

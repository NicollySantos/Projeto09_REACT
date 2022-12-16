import mapa from './img/mapa.png';
import b1 from './img/b1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo(a) ao Blog do Estado!</h1>
        <img src={mapa} className="mapa" alt="mapa" />
        <br/>
        
       <p>O Brasil é o 5º maior país do mundo. 
        É tão grande que é dividido em regiões que apresentam <br/>
        características climáticas, econômicas, culturais e sociais semelhantes. Além disso, <br/>
        os estados também são tão grandes a ponto de serem maiores que outros <br/>
        países em volta do mundo.</p>
        <br/>
        <br/>
        <p1>10° Lugar - Tocantis</p1>
         <img src={b1} className="bandeira" alt="bandeira" />
         <br/>
         <p2>O décimo maior estado do país é localizado na região norte, com uma área de <br/> 
          aproximadamente 277 milhões de quilômetros quadrados. Sua área urbana tem em <br/>
          torno de 100 km². A densidade populacional é aproximadamente 5 habitantes por km².<br/>
          Esse estado é o mais recente dos estados brasileiros, já que foi criado à partir de uma <br/>
          determinação definida na Constituição de 1988. O nome do estado faz homenagem <br/>
          ao Rio Tocantins, que corta o território estadual de norte a sul. Todo o seu <br/>
          território corresponde a cerca de 3% da área total do Brasil.</p2>
      </header>
    </div>
  );
}

export default App;




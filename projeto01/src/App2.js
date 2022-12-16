
import b3 from './img/b3.png';
import './App.css';

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <p1>8° Lugar - Maranhão</p1>
        <img src={b3} className="bandeira" alt="bandeira" />
        <br />
        <p2>O oitavo maior estado do Brasil, é localizado na região Nordeste e possui <br/>
        uma área urbana aproximada de 512 km², sendo a área total próxima de 332 milhões <br/>
        de km². A densidade populacional chega perto de 20 habitantes por km².<br/>
        O Maranhão é o segundo maior estado do nordeste e também possui a segunda maior <br/>
        extensão do litoral. Em seu território é possível encontrar uma grande <br/>
        diversidade de ecossistemas.</p2>
      </header>
    </div>
  );
}

export default App2;

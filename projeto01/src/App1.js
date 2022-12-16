
import b2 from './img/b2.png';
import './App.css';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <p1>9° Lugar - Rio Grande do Sul</p1>
        <img src={b2} className="bandeira" alt="bandeira" />
        <br />
        <p2>Localizado na região Sul, o nono maior estado do Brasil possui uma área de <br/>
          aproximadamente 282 milhões de km². Já sua área urbana fica em torno de 2 mil km². <br/>
          A densidade populacional é cerca de 40 habitantes por km².<br/>
          O Rio Grande do Sul é o mais populoso da região Sul, contando com mais de <br/>
          11 milhões de habitantes. Sendo sua população a mais diversificada, <br/>
          já que é composta por descendentes de imigrantes alemães, italianos,<br/> 
          portugueses, poloneses, entre outros. O estado ainda faz divisa com um <br/>
          estado brasileiro, o Paraná, faz fronteira com a Argentina e o Uruguai.</p2>
      </header>
    </div>
  );
}

export default App1;

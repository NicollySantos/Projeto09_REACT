import logo from './logo512.png';
import b5 from './img/b5.png';
import './App.css';

function App4() {
  return (
    <div className="App">
      <header className="App-header">
        <p1>1° Lugar - Amazonas</p1>
        <img src={b5} className="bandeira" alt="bandeira" />
        <br />
        <p2>Esse é o maior estado do país, localizado na região norte, com área de aproximadamente <br/>
        1,5 bilhão de km², já em relação à área urbana possui cerca de 395 km². Em todo o estado <br/>
        a densidade populacional é de 2,23 habitantes por km². O estado ocupa 18,31% de todo o<br/>
        território nacional, e se fosse um país ocuparia a 16ª posição no ranking de maiores <br/>
        países. Apesar de ser o maior estado brasileiro, possui apenas quatro milhões de <br/>
        habitantes, correspondendo a apenas 2% da população nacional.</p2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p2>Obrigada pela atenção!</p2>
        <a href='https://escolaeducacao.com.br/maiores-estados-do-brasil/'> Acesse para mais informações</a>
        <br/>
        <br/>
  
        <img src={logo} className="App-logo" alt="App-logo" />
        <br/>
        <br/>
        <p2>By Nicolly E.</p2>
        <br/>
        <br/>
      </header>
    </div>
  );
}

export default App4;

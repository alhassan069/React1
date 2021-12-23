import logo from './logo.svg';
import './App.css';
var OS = ["Android", "Blackberry", "iPhone", "Windows Phone"];
var Man = ["Samsung", "HTC", "Micromax", "Apple"];
function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>{OS.map((e) => (
        <li>{e}</li>
      ))}
      </ul>
      <br />
      <h1>Mobile Manufacturers</h1>
      <ul>
        {Man.map((e) => (
          <Mbl nam={e} /> 
        ))}
      </ul>
    </div>
  );
}

function Mbl({nam}){
  
  return <li>{nam}</li>
  
}

export default App;

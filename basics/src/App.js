import './App.css';

function App() {
  return ( 
    <div className="App">
      <User name="Piotr" age={44} epost="ss@dd.dd" />
      <User name="Pawel" age={55} epost="gg@dd.dd" />
      <User name="Chris" age={66} epost="asd@dd.dd" />

    </div>
   );
}


const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.epost}</h1>
    
    </div>
  );
};



export default App;

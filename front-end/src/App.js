import './App.css';
import Page from './Components/page';
import ReactDOM from "react-dom";

function App() {
  return (
    
    <div className="App">
      <Page></Page>
      
     
      </div>
      
    
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

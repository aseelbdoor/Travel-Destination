import './rest.css';
import './App.css';
import Home from './components/home/Home';
// @ts-ignore
let destination =require('./data/db.json');
function App() {
  return (
    <>
    <Home data ={destination}/>
    </>
  );
}

export default App;

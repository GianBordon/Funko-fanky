import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App

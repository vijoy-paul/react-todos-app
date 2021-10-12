import logo from './logo.svg';
import './App.css';
// import './myComponents/Header'
import Header from './myComponents/Header';
import Footer from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import { TodosItem } from "./myComponents/TodoItem";

function App() {
  return (
     <>
      <Header/>
      <Todos/>
      <Footer/>
     </>
  );
}

export default App;

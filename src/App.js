
import './App.css';
import Header from './myComponents/Header';
import Footer from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import { TodosItem } from "./myComponents/TodoItem";

function App() {
  return (
     <>
      <Header title = {"Todos-list"} />
      <Todos/>
      <Footer/>
     </>
  );
}

export default App;


import './App.css';
import Header from './myComponents/Header';
import Footer from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import { TodosItem } from "./myComponents/TodoItem";

function App() {
   const onDelete = (todo)=>{
      console.log("you click on delete",{todo})
   }
   let todos =[
      {
         sno : 1,
         title : "market shoping list",
         Desc : "i need 2 eggs and 1kg of flour(1)"
      },
      {
         sno : 2,
         title : "market shoping list",
         Desc : "i need 2 eggs and 1kg of flour(2)"
      },
      {
         sno : 3,
         title : "market shoping list",
         Desc : "i need 2 eggs and 1kg of flour(3)"
      }
   ]
  return (
     <>
      <Header title = {"Todos-list"} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
     </>
  );
}

export default App;

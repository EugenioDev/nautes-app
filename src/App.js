import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Pirate from "./Pages/Pirate";
import CustomHook from "./Pages/CustomHook";
import TodoApp from "./Pages/TodoApp";


function App() {
  return (
   <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/pirate' element={<Pirate/>}/>
         <Route path='/customHook' element={<CustomHook/>}/>
         <Route path='/todoapp' element={<TodoApp/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

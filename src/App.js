import React from 'react';
import ToDoList from "./Components/ToDoList";
import{ BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
                <ToDoList/>
        </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ToDoList from "./Components/ToDoList";
import{ BrowserRouter as Router} from "react-router-dom";
import Themes from "../src/Components/Theme/Themes";
import ToDoListContextProvider from "./Components/AppContext";

function App() {
  return (

    <div className="App">
        <ToDoListContextProvider>
            <Router>
                    <Themes>
                        <ToDoList/>
                    </Themes>
            </Router>
        </ToDoListContextProvider>
    </div>

  );
}

export default App;

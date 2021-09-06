import "./App.css";
import React, { useState, useEffect } from "react";
import {SearchBox, TaskItem, GitHubCorner} from "./Components";

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useLocalStorage('lista',[]);

  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }

  function handleSearchInput(newText) {
    setSearch(newText);
  }

  function addAction(newItem) {
    let newList = [...list, { task: newItem, done: false }];

    /*  newList.push({
          task: newItem, 
          done:false
    }); */

    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];
    
    newList[index].done = !newList[index].done;

    newList.splice(index,1);

    setList(newList);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <GitHubCorner projectUrl="https://github.com/Gabriel4420?tab=repositories"/>
        <div className="App-SearchBox">
          <h1>Lista de tarefas</h1>
          <SearchBox
            searchQuery="Add Task"
            bgColor="#4719FF"
            colorText="#FADF00"
            borderColor="#4719FF"
            value={list}
            onChangeText={handleSearchInput}
            onEnter={addAction}
          />
        
        </div>

        <ul style={{marginLeft:'-45px'}}>
          {
          list.length > 0 ?(
          list.map((item, index) =>

           !item.done &&(
                <TaskItem
                  onClick={() => handleToggleDone(index)}
                  key={index}
                  colorTask="#4719FF"
                  bgTask="#AD9B00"
                  task={item.task}
                  done={item.done}
                />) 
          )
          )

          :

          (<p style={{color:'white',fontFamily:'Helvetica',fontSize:'30px'}}>Nenhuma task</p>)
          
          }


          
        </ul>
      </header>
    </div>
  );
}

export default App;

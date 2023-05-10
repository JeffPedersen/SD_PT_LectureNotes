// Make sure to first import useState from React
import { useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import NameThing from './components/test lab/name';
import AddUser from './components/addUser/AddUser';

function App() {
  const iCount = () => {
    console.log("iCount running each time!")
    return 0; // providing our initial value to useState(what count equals)
  }
  const [count, setCount] = useState(iCount());
  // ^Bringing this in to allow app.js to use these variables per counter-directions.md
  
  // keyword [ variable, function ] = hook(initial value);
  const [ names, setName ] = useState([]); //"bilbo", "sam", "gandalf", "frodo", "pippin"

  // Build a function that will map and display a welcome per hobbit (this will return a welcome component per hobbit)
  const displayWelcome = () => {
    return(names.map((name, index) => {
      // Per name we use return so each name gets a component returned 
      // Passing the whole names array and setNames function to the child component welcome
      // This will allow us to change the array in the child components
      return(
        <Welcome 
          key={index}
          name={name}
          names={names} //pass the whole full array as props 
          setName={setName} // passing our setName function
        />
      )
    }))
  }

  return (
    <div className="App">
      <Nav />
      <AddUser names={names} setName={setName}/>
      {/* <Welcome name={name}/> was replaced by the mapping function above */}
      { names.lenght > 0 ?
      displayWelcome() : 
        <div>
          <h1 style={{textAlign: "center"}}>Add a New User!</h1>
          <AddUser names={names} setName={setName}/>
        </div>
      }
      <NameThing />
      <Counter 
      count={count}
      setCount={setCount}
      />
      {/* <Welcome /> was replaced by the mapping function above*/}
      
    </div>
  );
}

export default App;

import { useState } from 'react'; // line 6 requires import

export default function AddUser({ names, setName }) {
    console.log(names, setName);
    // We need a state to store the input text value
    const [ text, setText ] = useState(() => '') // () => ''because we want this to start out as 'nothing'
    console.log(text);

    // We need to build the functionality to handle the change, handleChange()
    const handleChange = (e) => {  
        //console.log(e); // we use the event to gain access to the 'targets value' aka the input's value
        setText(e.target.value);
    }

    // We need to build the functionality to actually submit the text value, eventually it should be added to our names array, handleSubmit()
    const handleSubmit = () => {
        e.preventDefault(); // prevents auto refresh on submit button
        // console.log("HandleSubmit function called")
        // console.log("names")

        // gain access to the names array
        let addUser = [ ...names]; // '...array' lets us grab the content of the array
        // Add a name/input value to the array: 
        addUser.push(text);
        // use setName to change the names array for the whole app
        setName(addUser); // replace old array with new one
        setText("");
    }

  return (
    <form
        // Create how the form can call the handleSubmit function
        onSubmit={(e) => handleSubmit(e)}
        >
            <input 
                // Create how input can call/use handleChange function
                onChange={(e) => handleChange(e) } // (e) for event
                // Connect the input text to our state text, inputs hold the value via the value prop

                type="text" 
                />
            <br />
            <input type="submit" value="Add" />
    </form>
  )
}

// rfc and remove import react bit


export default function Welcome(props) {
  //console.log(props);
  //console.log(props.names);

  // Build a functiuon that can remove an item
  function removeName() {
    // test function with console.log
    //console.log(`clicked ${props.name}`);

    // Create variable called updatedNames, this will be targeting the names state array that is being passed and .filter() the name that was assigned to each component and comparing it to the prop.name we are viewing.
    // filter() will generate a new array and store it within our variable.
    const updatedNames = props.names.filter(name => name !== props.name);

    // Next we target our setName prop(function) and pass our new array as the updated value for our state variable. Aka we will reset the names array to the updatedNames filtered array
    props.setName(updatedNames);
  }

    return (
    <div onClick={removeName} className="welcome">Welcome, {props.name}</div>
  )
}

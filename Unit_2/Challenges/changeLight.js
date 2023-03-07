//class constructor
class TrafficLight {
    constructor(color, state) {
      this.color = color;
      this.state = state;
    }
  }
  
  //new lights with description
  let redLight = new TrafficLight("red", "stop");
  let yellowLight = new TrafficLight("yellow", "caution");
  let greenLight = new TrafficLight("green", "go");
  
  let lightCurrent = redLight;
  
  const lightLookUp = {
    "red stop": redLight,
    "yellow caution": yellowLight,
    "green go": greenLight
  };

  //lights object that establish rules of transition
const lightStates = {
  "stop": ["caution"],
  "caution": ["stop", "go"],
  "go": ["caution"]
};

  console.log(`\nThe light is currently: ${lightCurrent}`)
  
  function changeLight(newLight) {
    if (lightStates[lightCurrent.state].includes(newLight.state)) {
      lightCurrent = newLight;
      console.log(lightLookup[lightCurrent]);
    } else {
      console.log(`Cannot move from ${currentLight} to ${newLight}`)
    }
  }
  
  //look up table
 
  
  
  //set the frist light
  let firstLight = "green"
  
  
  //functionality
  function changeLight(newLight) {
  
  }
  
// Parent component for the table
import PresidentsTable from "./PresidentsTable"
import { presidentsArray } from "./presidents.constant"

export default function Presidents(props) {
  
    // Build function that can filter thru the array to check for which have an undefined past date
    const livingPresidents = presidentsArray.filter(president => {
      return president.passed === undefined;
    });
    const deadPresidents = presidentsArray.filter(president => {
      return president.passed !== undefined;
    })

  return (
    <>
        <h2>Hello from Presidents component</h2>
        {/* One table of living Presidents*/}
        <PresidentsTable 
        title={"Living Presidents"} 
        presidents={livingPresidents}/>
      
        <PresidentsTable 
        title={"Dead Presidents"} 
        presidents={deadPresidents}/>
        {/* One table of dead Presidents*/}
        
        
    </>
    
  )
}

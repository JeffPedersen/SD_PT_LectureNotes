/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/

function AboutMe() {

    let city = "Los Angeles";
    let state = "CA";
    let styles = {
        ul:{
            textAlign: "right",
            color: "green"
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(
        <div>
            <p style={styles.p}> I grew up in {city}, {state} </p>
            <ul style={styles.ul}>
                <li>Portugal</li>
                <li>Iceland</li>
                <li>Target</li>
            </ul>
        </div>
        
    )
}

export default AboutMe;
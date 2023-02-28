/* 
  midterm: 3.3,
  project: 4.0,
  final: 3.2
*/

//! currently at step  Utilizing the bracket notation, multiply the grade by weight values and add back gradeSum.

let grades = {
    midterm: {
      grade: 3.3,
      weight: 1
    },
    project: {
      grade: 4.0,    
      weight: 1
    },
    final: {
      grade: 3.2,
      weight: 2
    }
  }
  
  function gpa(object) { // object is the parameter
    let gradesToWeight = object.keys(object);
    let gradeSum = 0;
    let weightSum = 0;
    
    gradesToWeight.forEach(key) {
        gradeSum += object[key] * key;
        weightSum += key;
    }
    const weightedGrade = gradeSum / weightSum;
  }
  
  //! psuedocode
  // establish gradesToWeigh
  // give it objec//ts
  // apply .keys()
  
  console.log('The final GPA is ' + gpa(grades));
  // should print: 'The final GPA is 3.425'
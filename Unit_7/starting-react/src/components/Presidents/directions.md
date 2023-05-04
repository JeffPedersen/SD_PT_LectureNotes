Challenge:
    - [x]Create a new folder within the components folder called "Presidents"
      - [x]Create a file called PresidentVotes.jsx
      - [x]Create a file called DisplayTotals.jsx
    - [x]Create a functional component within each that matches their file name.
      - [x]Note: Don't forget to export!
      - [x]PresidentVoting.jsx 
      - [x]will import DisplayTotals.jsx
      - [x]Will have an array to be passed as props (array supplied below)
      - [x]will return a React.Fragment
        - []xWill have a h1 that will hold "Presidents"
        - [x]Will map through the provided array and mount DisplayTotals with the values within each object.
          - Hint: Don't forget about a key.
          - DisplayTotals.jsx
      - [x]Will return a React.Fragment that holds a paragraph tag that states "NAME had a total vote count of COUNT"
    - [x]Import and mount within App.jsx under the Employee component.

    Array to pass through props:
```
    const votes = [
      { name: "Abe Lincoln", count: 139033},
      { name: "Stephen Douglas", count: 115509},
    ]
```
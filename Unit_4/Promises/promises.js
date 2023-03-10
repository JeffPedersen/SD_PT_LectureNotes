/* 
! Promises
    Is an object that may produce a singular value in the future.
    A promise allows us to "wait" for our results (regardless if we get a pos/neg)

    3 states
    - pending - in the process of getting the result
    - fulfilled - successfully got the result
    - rejected - unable to get results

    - Always returns an object { }

    - Promises take in two parameters: 
        - resolve
        - reject
*/

//? Faux Internet send
function getData() {
    setTimeout(() => {return "Here's some faux data!"}, 3000)
}

let data = getData();
console.log(data);

//-----------------------------------------------------------------------------------------------

//? Use Callback
function getData(cb) {setTimeout(() => {cb("some data to be delivered")}, 3000)
}
getData(data => console.log(data));
console.log(`Wow, the compiler is fast`);

/* A promise is an object that may produce a singular value in the future
    - Resolved: If we obtain our data, we can resolve and use it
    - Rejected: If we get nothing or an error, we can handle it with reject

    How we can make our program wait for data instead of giving us undefined results:
*/

// promise in itself
function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("Promise resolved: some data")
            } else {
                reject("Promise rejected, oh noes")
            }
        })
    })
}
console.log(returnData()); // Promise { <pending> }

/* //! Resolvers
        - When returned, the returnData() function will return a promise instead of a given string
        - Chaining with a resolver
            - Keywords:
                .then()
                    if success "then" do this
                    can be chained together (aka do multiple things)
                .catch ()
                    if rejection
            - Take in a callback function ( thicc arrow => )
            - ONLY PUT SEMICOLON (;) AFTER THE LAST RESOLVER
*/

// call the returnData() function
returnData()
    .then((data) => console.log("From resolved response: ", data))
    // chaining .then(s) for fun
    .then(() => {
        let x = 10; 
        let y = 10; 
        console.log(x * y); // 100
    })
    .then(() => {
        console.log("heh, I could do this all day");
    })
    .catch(function (err) {
        console.log(err);
    });

/* //! The Process
        - Create a new promise
            - resolve / reject parameters of a callback function
        - setTimeout is acting as a waiting process for data
        - resolve() or reject() said promise
        - ^After that when returned we got a promise not a string
        - Needed to use resolvers (.then() / .catch()) with callbacks to extrapolate(get) the info from that promise.
*/
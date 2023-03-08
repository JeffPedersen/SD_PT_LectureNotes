# JavaScript / DOM Debugging

The most important thing to understand when coding:
**_Errors can and will happen._**

We have tools to test and combat them.

## Console.log

Our first line of defense when coding, we can check for the console.log(s) we wrote/expect:

- In the output when running local code in VSC
- In the browser console when running code live in browser

## Debugger

We have seen the VSC debugger once or twice, the debugger allows us to set "breakpoints" for us to control JS running/executing the file.

That gives us the power to view how JS is reading/interpreting our logic so we can see if what code we wrote communicates what we want JS to do.

- VSC

  - Click on space to the left of the line #s to add a breakpoint (a red dot).
  - Click the debugger sidebar menu icon of the bug and play button.
  - Click the blue "Run and Debug" button.
  - Choose node to debug our JS.
  - Controls to start/pause or step through each line will be at the top of the open file.

- Browser
  - All are slightly different, but we can typically:
  - Inspect the page with a right click on the web page.
  - In the inspect tools, there should be a "Sources" tab.
  - Sources gives us access to the files of the running project.
  - Like VSC, we can click on the line #s/to the left of them to signal a breakpoint.
  - (The breakpoint may look different from browser to browser...)
  - There should be controls either somewhere in the inspect area and/or at the top middle of the webpage.

Stop the debugger from running with the stop button, exiting the debugger, or "resuming the script" in the browser.

### Debugger Keyword:

- You can also hard code a breakpoint with the `debugger` keyword statement.
- If not in debugging/using the debugger: nothing will happen, the statement has no effect on the code.
- If debugging/the debugger is on: the code will stop executing and wait for you to use the debugger controls to step through.

Ex:

```
let i = 5;
debugger;
if (i <= 10) {
    console.log(i);
} else {
    console.log("That number is greater than 10.");
}
```

[JavaScript Debugging W3Schools](https://www.w3schools.com/js/js_debugging.asp)
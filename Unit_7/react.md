# React

What is React?

- Created by Facebook
- Is a Client Side JavaScript Library
- Helps us build modern, reactive user interfaces for the web.
- Very quick on page rendering.
- Works via using **Components**

Why use it?

- Many companies use or are transitioning their current websites to ReactJS
- Some major companies: Facebook, Netflix, Uber, Dropbox, AirBnB

What we will be focusing on learning:

- React's core syntax & JSX
- Working with components (and all user interactions with the components)
- Working with Data on the front end

> <br>
>
> ### What's a Component again?
>
> A component is a section or item on a page that can be built dynamically or statically.
>
> Usually a reusable element or structure.
> Ex: Think of the Bootstrap <CardDeck > and <Card > elements, those can be reused over and over either statically (pasted 10x's in HTML) or dynamically (using DOM manipulation in JS).
>
> <br>
<br>

## JSX

JSX is JavaScript syntax that returns HTML. - It's basically a way for us to write both JS and HTML in tandem with one another in the same file.

We can inject JS directly into our JSX. - This helps us create a lot of dynamic and flexible aspects within our builds (how the components are mounted/rendered, how to the logic applies to them, it honestly is endless coding power).

### **Rules of JSX**

1. **Must** be exported for it to be used.
2. **Must** be imported for it to be used.
3. **Must** be mounted (mounting means putting elements into the DOM) to be used.
4. **Must** only return **ONE** JSX Element.

<br>

> <br>
>
> ### Quick Side Note: Mounting Vs Rendering
>
> | Mounting                                                           | Rendering                                                             |
> | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
> | Occurs when a component is first added to the page.                | Occurs when a component's state changes.                              |
> | Mounting initializes the component and sets it up for interaction. | Rendering updates the component's view based on changes to its state. |
>
> With React we will be doing a lot of both. React is fast and dynamic because of it's ability to render and rerender individual components versus the entire page when a change happens.
>
> <br>
<br>
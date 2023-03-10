# Build-in / Inherent Events
These are events that are a part of elements within our HTML
- Forms
- Buttons
- a / Anchor tags


# Forms
- `<form>` groups input fields together 
- `on submit` will gather data from the input field and pass it on
- `methods` 
    - types: C.R.U.D
        - POST (Create)
        - Get (Read)
        - PUT (Update)
        - DELETE
    - Part of HTTP structure in how we pass data
    - When a form is submitted, it automatically refreshes our browser


## Some Attributes
- `for` helps tie labels with the input field
- `autocomplete` allows us to show previous inputs that we might have had in the past forms. Relies on browser autocomplete
- `type` notes what type of data to expect
- `name` associates the name of the input
- `placeholder` is a way for us to write notes to users as what might be input
- `value` is what is held within the input whe submitted. gets populated when a user types into it/interacts

## Steps for DOM Manipulation
- **Create** the element.
- **Assign** any values to properties.
  - Provide text, class names, id names, etc.
- **Append** to a parent element.

*Note:* If an element already exists, we might only need to *assign* it a new value to update it.
# Character Creator

## Concept

This is an in-class build where we are creating a quick server that covers the CRUD funcitonality.

# Server Requirements

## JSON Model

```json
{
  "id": 0,
  "name": "String",
  "classType": "String",
  "age": 00,
  "race": "String",
  "npc": false,
  "level": 00
}
```

## Dependencies

- `express`
- `dotenv`

## Endpoints

- base: `localhost:[PORT#]`
- character controller: `/characters`
- route endpoints determined by method and outcome.

## Routes

- GET One by ID
- GET All
- GET All by class
- POST One
- PUT One by ID
- DELETE by ID

---

## Task List

| Status | Task                             | Process                                    |
| ------ | -------------------------------- | ------------------------------------------ |
| x      | Initialize Project               | `npm init -y`                              |
| x      | Install Dependencies             | `npm i express` `npm i dotenv`             |
| x      | Install Dev Dependencies         | `npm install --save-dev nodemon`           |
| x      | Establish Entry Point            | `app.js` or `index.js`                     |
| x      | Create Environmental File        | create file called .env                    |
| x      | Create Sample Environmental File | add out PORT# to it to hide it             |
| x      | Create gitignore file            | create gitignorefile                       |
| x      | Set gitignore                    | add node_modules & .env                    |
| x      | Connect to PORT / Test           |                                            |
| x      | Create Helpers Folder            |                                            |
| x      | Create db.json file              |                                            |
| x      | Est. first Entry                 | middle URL that takes us to controller     |
| x      | Create Controller Folder         |                                            |
| x      | Create controller file           | make a character.controller.js             |
| x      | Connect Controller               | properly require in router and export file |
| x      | Establish Routes                 | scope out / make to dos for routes         |
| x      | Build GET All                    |                                            |
| x      | Test Route                       |                                            |
| x      | Build GET One                    |                                            |
| x      | Test Route                       |                                            |
| x      | Build GET All by Class           |                                            |
|        | Consider conditions              |                                            |
|        | Test Route                       |                                            |
|        | Build POST One                   |                                            |
|        | Test Route                       |                                            |
|        | Build PUT One by ID              |                                            |
|        | Test Route                       |                                            |
|        | Build DELETE One by ID           |                                            |
|        | Test Route                       |                                            |

## Stretch Goals

| Stretch Goals                                      | Status            |
| -------------------------------------------------- | ----------------- |
| `POST` - What if a character ID already exists?    | Solution Provide  |
| `PUT` - What if one key is changed in a character? | Solution Provided |

### POST

- Consider how and when do we obtain our DB ids.
- How can we hold on to the current values?
  - Consider reviewing `Math` methods and `spread`.
  - `IF` the established generated ID already exists (`includes`), consider the greatest value and reset the ID based off that.

### PUT

- What key is being passed?
  - Review current values within the DB.
  - Consider how you can cycle through each key and respond depending on what's being passed.
    - If key matches - replace value / if not - keep value.
- What if the there isn't a character to change?
  - How do we handle the `404`

---

import React from 'react';
import { useState } from 'react';

function NameThing() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = `${firstName} ${middleName} ${lastName}`;

  const message = fullName
    ? `Hello, ${fullName}! Can you code?.`
    : "Please enter your name below.";

  return (
    <main>
      <form>
        <input onChange={(e) => { setFirstName(e.target.value) }}></input>
        <input onChange={(e) => { setMiddleName(e.target.value) }}></input>
        <input onChange={(e) => { setLastName(e.target.value) }}></input>
      </form>
      React⚛️ + Vite⚡ + Replit🌀
    </main>
  );
}

export default NameThing;


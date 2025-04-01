import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    // Ask for the user's name using alert prompt
    const userName = prompt("Please enter your name:");
    if (userName) {
      setName(userName);
    } else {
      setName("Guest"); // If no name is entered, set as "Guest"
    }
  }, []);

  return (
    <div>
      <h2>{greeting}, {name}! 😊</h2>
    </div>
  );
};

export default Greeting;

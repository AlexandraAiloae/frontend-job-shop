import React from "react";
import "./DisplayFileContent.css"; // Make sure the CSS path is correct

function DisplayFileContent({ data }) {
  if (!data) return <div>No data available.</div>;

  return (
    <div className="response-display">
      <div className="section">
        <h2>Machines Available:</h2>
        <ul>
          {data.machines.map((machine, index) => (
            <li key={index}>
              Name: {machine.name}, Capacity: {machine.capacity}, Cooldown Time:{" "}
              {machine.cooldownTime}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Parts to Process:</h2>
        {data.parts.map((part, index) => (
          <div key={index}>
            <h3>
              {part.name} (Quantity: {part.quantity})
            </h3>
            <ul>
              {part.operations.map((operation, opIndex) => (
                <li key={opIndex}>
                  Machine: {operation.machineName}, Duration:{" "}
                  {operation.duration}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayFileContent;

import React from "react";
import "./DisplaySchedule.css";

function DisplaySchedule({ data }) {
  if (!data) {
    return (
      <div className="schedule-container">No schedule data available.</div>
    );
  }

  return (
    <div className="schedule-container">
      <h2>Scheduled Operations</h2>

      {data.operations.map((op, index) => (
        <div key={index}>
          {index === 0 ||
          data.operations[index - 1].partName !== op.partName ? (
            <div className="part-divider">
              <span>Part: {op.partName}</span>
            </div>
          ) : null}
          <div className="operation-item">
            <p>{`Machine: ${op.machineName}, Start: ${op.startTime}, End: ${op.endTime}`}</p>
          </div>
        </div>
      ))}
      <h3>Total Processing Time: {data.totalProcessingTime}</h3>
    </div>
  );
}

export default DisplaySchedule;

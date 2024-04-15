import "./App.css";
import React, { useState } from "react";
import FileUploader from "./upload/FileUpload";
import DisplayFileContent from "./displayFileContent/DisplayFileContent";

function App() {
  const [uploadData, setUploadData] = useState();

  const handleSetData = (data) => {
    setUploadData(data);
  };

  return (
    <div className="App">
      <FileUploader onUploadSuccess={handleSetData} />
      <DisplayFileContent data={uploadData} />
    </div>
  );
}

export default App;

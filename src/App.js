import React, { useState } from "react";
import FileUploader from "./upload/FileUpload";
import DisplayFileContent from "./displayFileContent/DisplayFileContent";
import DisplaySchedule from "./displaySchedule/DisplaySchedule";

function App() {
  const [uploadData, setUploadData] = useState();

  const handleSetData = (data, name) => {
    setUploadData(data);
  };

  return (
    <div className="App">
      <FileUploader onUploadSuccess={handleSetData} />
      {uploadData && (
        <>
          <DisplayFileContent data={uploadData.jobShopData} />
          <DisplaySchedule data={uploadData.scheduleData} />
        </>
      )}
    </div>
  );
}

export default App;

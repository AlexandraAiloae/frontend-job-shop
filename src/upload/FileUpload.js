import React, { useState } from "react";
import { uploadFile } from "./UploadAPI";
import "./FileUpload.css";

function FileUploader({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const data = await uploadFile(selectedFile);
      console.log(data);
      onUploadSuccess(data);
      alert("File uploaded successfully.");
    } catch (error) {
      alert("Error uploading file. Please try again.");
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="file-upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;

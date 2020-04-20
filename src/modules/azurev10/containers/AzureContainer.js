import React, { useState } from "react";
import azure from "azure-storage/browser/azure-storage.blob.export";

import Uploading from "../components/Uploading";
import { AZURE_ACCOUNT, AZURE_CONTAINER, AZURE_KEY } from "../../../constants";

const AzureContainer = () => {
  const [uploads, setUploads] = useState([]);
  const [counter, setCounter] = React.useState(0);

  const blobService = azure.createBlobService(AZURE_ACCOUNT, AZURE_KEY);

  const uploadFiles = async e => {
    setUploads([]);
    setCounter(0);

    const files = e.target.files;
    if (files && files.length) {
      const intervalStartTime = Date.now();
      const azureInterval = setInterval(
        () => setCounter((Date.now() - intervalStartTime) / 1000),
        500
      );
      Array.from(files).forEach(file => {
        blobService.createBlockBlobFromBrowserFile(
          AZURE_CONTAINER,
          file.name,
          file,
          function(error, result, response) {
            setUploads(uploads => {
              const newUploads = [...uploads, result];
              if (newUploads.length === files.length) {
                clearInterval(azureInterval);
              }
              return newUploads;
            });
          }
        );
      });
    }
  };

  return (
    <Uploading uploadFiles={uploadFiles} uploads={uploads} counter={counter} />
  );
};

export default AzureContainer;

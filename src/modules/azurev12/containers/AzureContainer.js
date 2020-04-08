import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

import Uploading from "../components/Uploading";
import { AZURE_ACCOUNT, AZURE_CONTAINER, AZURE_SAS } from "../../../constants";

const AzureContainer = () => {
  const [uploads, setUploads] = useState([]);
  const [counter, setCounter] = React.useState(0);

  const blobService = new BlobServiceClient(
    `https://${AZURE_ACCOUNT}.blob.core.windows.net${AZURE_SAS}`
  );

  const uploadFiles = async e => {
    setUploads([]);
    setCounter(0);

    const files = e.target.files;
    const intervalStartTime = Date.now();
    const azureInterval = setInterval(
      () => setCounter((Date.now() - intervalStartTime) / 1000),
      500
    );
    Array.from(files).forEach(file => {
      const containerClient = blobService.getContainerClient(AZURE_CONTAINER);
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);
      blockBlobClient
        .uploadBrowserData(file)
        .then(uploadedFile => {
          setUploads(uploads => {
            const newUploads = [
              ...uploads,
              { ...uploadedFile, ...blockBlobClient }
            ];
            if (newUploads.length === files.length) {
              clearInterval(azureInterval);
            }
            return newUploads;
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  return (
    <Uploading uploadFiles={uploadFiles} uploads={uploads} counter={counter} />
  );
};

export default AzureContainer;

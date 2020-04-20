import React, { useState } from "react";
import ReactS3 from "react-s3";

import Uploading from "../components/Uploading";
import { S3_CONFIG } from "../../../constants";

const AwsContainer = () => {
  const [uploads, setUploads] = useState([]);
  const [counter, setCounter] = React.useState(0);

  const uploadFiles = async e => {
    setUploads([]);
    setCounter(0);

    const files = e.target.files;
    if (files && files.length) {
      const intervalStartTime = Date.now();
      const awsInterval = setInterval(
        () => setCounter((Date.now() - intervalStartTime) / 1000),
        500
      );
      Array.from(files).forEach(file => {
        ReactS3.uploadFile(file, S3_CONFIG)
          .then(result => {
            setUploads(uploads => {
              const newUploads = [...uploads, result];
              if (newUploads.length === files.length) {
                clearInterval(awsInterval);
              }
              return newUploads;
            });
          })
          .catch(err => console.error(err));
      });
    }
  };

  return (
    <Uploading uploadFiles={uploadFiles} uploads={uploads} counter={counter} />
  );
};

export default AwsContainer;

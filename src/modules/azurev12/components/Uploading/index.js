import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Uploading = ({ classes, uploadFiles, uploads, counter }) => {
  console.log(uploads);
  return (
    <div className={classes.wrapper}>
      <h2>Azure v12</h2>
      <input
        className={classes.input}
        type="file"
        onChange={uploadFiles}
        multiple
      />
      <div className={classes.downloads}>
        {uploads.map(file => (
          <a
            href={file.url}
            key={file.requestId}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {file._name}
          </a>
        ))}
      </div>
      <p>{counter} Seconds</p>
    </div>
  );
};

export default withStyles(styles)(Uploading);

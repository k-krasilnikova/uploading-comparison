import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Uploading = ({ classes, uploadFiles, uploads, counter }) => {
  console.log(uploads);
  return (
    <div className={classes.wrapper}>
      <h2>AWS</h2>
      <input
        className={classes.input}
        type="file"
        onChange={uploadFiles}
        multiple
      />
      <div className={classes.downloads}>
        {uploads.map(
          file =>
            file && (
              <a
                href={file.location}
                key={file.key}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.key}
              </a>
            )
        )}
      </div>
      <p>{counter} Seconds</p>
    </div>
  );
};

export default withStyles(styles)(Uploading);

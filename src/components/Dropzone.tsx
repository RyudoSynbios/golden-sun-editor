import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

interface DropzoneProps {
  isLoading: boolean;
  error: string;
  onChange: (file: File) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    height: 400,
    cursor: "pointer",
    outline: "none",
  },
  logo: {
    marginBottom: theme.spacing(5),
    width: 200,
  },
  content: {
    minHeight: 60,
    textAlign: "center",
  },
}));

function Dropzone({ isLoading, error, onChange }: DropzoneProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const onDrop = useCallback(
    (acceptedFiles) => {
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} {...getRootProps()}>
        <img src="img/logo.png" alt="logo" className={classes.logo} />
        <div className={classes.content}>
          {!isLoading && (
            <>
              <input {...getInputProps()} />
              <div>
                {t(
                  !isDragActive ? "general.dropzone" : "general.dropzoneActive"
                )}
              </div>
            </>
          )}
          {isLoading && <CircularProgress color="primary" />}
          {!isLoading && error !== "" && <div>{error}</div>}
        </div>
      </Paper>
    </div>
  );
}

export default Dropzone;

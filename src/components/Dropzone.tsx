import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
  dropzone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
    width: 600,
    height: 400,
    cursor: "pointer",
    outline: "none",
    border: `2px dashed ${theme.palette.primary.main}`,
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
      <Paper>
        <div className={classes.dropzone} {...getRootProps()}>
          <img src="img/logo.png" alt="logo" className={classes.logo} />
          <div className={classes.content}>
            {!isLoading && (
              <>
                <input {...getInputProps()} />
                <Typography>
                  {t(
                    !isDragActive
                      ? "general.dropzone"
                      : "general.dropzoneActive"
                  )}
                </Typography>
              </>
            )}
            {isLoading && <CircularProgress color="primary" />}
            {!isLoading && error !== "" && (
              <Typography color="textSecondary">{error}</Typography>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Dropzone;
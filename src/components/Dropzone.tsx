import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import LanguageSwitcher from "./LanguageSwitcher";

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
    position: "relative",
  },
  dropzone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: 600,
    height: 400,
    cursor: "pointer",
    outline: "none",
    border: `2px dashed ${theme.palette.primary.main}`,
  },
  logo: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: 100,
  },
  content: {
    minHeight: 72,
    textAlign: "center",
  },
  language: {
    position: "absolute",
    right: 10,
    bottom: 10,
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
      <Paper className={classes.paper}>
        <div className={classes.dropzone} {...getRootProps()}>
          <img src="img/icon.png" alt="logo" className={classes.logo} />
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
            {!isLoading && !isDragActive && error !== "" && (
              <Typography color="textSecondary">
                {t(`errors.${error}`)}
              </Typography>
            )}
          </div>
        </div>
        <div className={classes.language}>
          <LanguageSwitcher />
        </div>
      </Paper>
    </div>
  );
}

export default Dropzone;

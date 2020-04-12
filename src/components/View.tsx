import React, { ReactNode } from "react";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

interface ViewProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    overflow: "auto",
  },
}));

function View({ children }: ViewProps) {
  const classes = useStyles();

  return <Paper className={classes.root}>{children}</Paper>;
}

export default View;

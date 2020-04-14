import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import packageJson from "../../package.json";

interface AboutProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  thanks: {
    marginTop: theme.spacing(3),
  },
  ul: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));

function About({ open, onClose }: AboutProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle>{t("general.about")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t("about.message")}</DialogContentText>
        <Typography variant="subtitle2" className={classes.thanks}>
          {t("about.specialThanks")}
        </Typography>
        <ul className={classes.ul}>
          <li>Griever</li>
        </ul>
        <Typography variant="caption">
          {t("about.version")} {packageJson.version}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          {t("general.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default About;

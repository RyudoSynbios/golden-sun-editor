import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

interface ConfirmProps {
  open: boolean;
  message: string;
  action: () => void;
  onClose: () => void;
}

function Confirm({ open, message, action, onClose }: ConfirmProps) {
  const { t } = useTranslation();

  function handleConfirm() {
    action();
    onClose();
  }

  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          {t("general.cancel")}
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          {t("general.confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;

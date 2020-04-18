import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { makeStyles } from "@material-ui/core/styles";

import UncompressedImage from "./UncompressedImage";

interface IconSelector {
  icons: [];
  value: number;
  onChange: (event: any) => void;
}

const useStyles = makeStyles((theme) => ({
  button: {
    height: 48,
  },
  dialogContent: {
    display: "flex",
    flexFlow: "wrap",
  },
  iconContainer: {
    height: 32,
    background: theme.palette.primary.main,
  },
  icon: {
    cursor: "pointer",
    opacity: 1,
    WebkitTransition: ".3s ease-in-out",
    transition: ".1s ease-in-out",
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

function IconSelector({ icons, value, onChange }: IconSelector) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function handleClick(index: number) {
    onChange(index);
    handleClose();
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <Button fullWidth className={classes.button} onClick={handleOpen}>
        <UncompressedImage data={icons[value]} width={32} />
      </Button>
      <Dialog open={open} maxWidth="xs" fullWidth onClose={handleClose}>
        <DialogContent className={classes.dialogContent}>
          {icons.map((icon, index) => (
            <div key={index} className={classes.iconContainer}>
              <UncompressedImage
                data={icon}
                width={32}
                className={classes.icon}
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default IconSelector;

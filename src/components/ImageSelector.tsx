import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { makeStyles } from "@material-ui/core/styles";

import UncompressedImage from "./UncompressedImage";

interface ImageSelector {
  width: number;
  images: [];
  value: number;
  disabled?: boolean;
  onChange: (event: any) => void;
}

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    flexFlow: "wrap",
  },
  imageContainer: {
    background: theme.palette.primary.main,
  },
  image: {
    cursor: "pointer",
    opacity: 1,
    WebkitTransition: ".3s ease-in-out",
    transition: ".1s ease-in-out",
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

function ImageSelector({
  width,
  images,
  value,
  disabled,
  onChange,
}: ImageSelector) {
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
      <Button fullWidth disabled={disabled} onClick={handleOpen}>
        <UncompressedImage
          data={value !== null ? images[value] : []}
          width={width}
        />
      </Button>
      <Dialog open={open} maxWidth="xs" fullWidth onClose={handleClose}>
        <DialogContent className={classes.dialogContent}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{ height: width }}
              className={classes.imageContainer}
            >
              <UncompressedImage
                data={image}
                width={width}
                className={classes.image}
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageSelector;

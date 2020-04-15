import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import View from "../components/View";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    display: "flex",
  },
});

function Sprites({ sprites, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("sprites", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={sprites}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.width")}
                value={sprites[selectedItem].width}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.height")}
                value={sprites[selectedItem].height}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.offsetX")}
                value={sprites[selectedItem].offset_x}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("offset_x", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.offsetY")}
                value={sprites[selectedItem].offset_y}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("offset_y", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              {/* // TODO: Show between () the result in percent (256 = 100%) */}
              <TextField
                type="number"
                label={t("inputs.scale")}
                value={sprites[selectedItem].scale}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) => handleChange("scale", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.collisionDiameter")}
                value={sprites[selectedItem].collision_diameter}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 32762557 }}
                onChange={(event) =>
                  handleChange("collision_diameter", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.directions")}
                value={sprites[selectedItem].directions}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.animations")}
                value={sprites[selectedItem].animations}
                fullWidth
                disabled
              />
            </Grid>
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Sprites;

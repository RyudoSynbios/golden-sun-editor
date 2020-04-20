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

function Maps({ maps }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List items={maps} selectedItem={selectedItem} onClick={handleClick} />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={maps[selectedItem].name}
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

export default Maps;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import View from "../components/View";

import { Ability } from "../utils/loader";

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

function Summons({ summons, abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("summons", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={summons}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={summons[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={t("inputs.description")}
                value={summons[selectedItem].description}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.ability")}
                value={summons[selectedItem].ability}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("ability", event.target.value)
                }
              >
                {abilities.map((ability: Ability, index: number) => (
                  <option key={index} value={index}>
                    {ability.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.venus")}
                value={summons[selectedItem].venus}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 4 }}
                onChange={(event) => handleChange("venus", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mercury")}
                value={summons[selectedItem].mercury}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 4 }}
                onChange={(event) =>
                  handleChange("mercury", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mars")}
                value={summons[selectedItem].mars}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 4 }}
                onChange={(event) => handleChange("mars", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.jupiter")}
                value={summons[selectedItem].jupiter}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 4 }}
                onChange={(event) =>
                  handleChange("jupiter", event.target.value)
                }
              />
            </Grid>
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Summons;

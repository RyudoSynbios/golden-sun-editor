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

function Djinn({ djinn, abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("djinn", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List items={djinn} selectedItem={selectedItem} onClick={handleClick} />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={djinn[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={t("inputs.description")}
                value={djinn[selectedItem].description}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.ability")}
                value={djinn[selectedItem].ability}
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
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.hp")}
                value={djinn[selectedItem].hp}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) => handleChange("hp", event.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.pp")}
                value={djinn[selectedItem].pp}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) => handleChange("pp", event.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.attack")}
                value={djinn[selectedItem].attack}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) => handleChange("attack", event.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.defense")}
                value={djinn[selectedItem].defense}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) =>
                  handleChange("defense", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.agility")}
                value={djinn[selectedItem].agility}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) =>
                  handleChange("agility", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label={t("inputs.luck")}
                value={djinn[selectedItem].luck}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 127 }}
                onChange={(event) => handleChange("luck", event.target.value)}
              />
            </Grid>
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Djinn;

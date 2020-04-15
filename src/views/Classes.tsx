import React, { Fragment, useState } from "react";
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

function Classes({ Classes, abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  const percentages = [
    ...[...new Array(256)].map((_, index) => `${index * 10}%`),
  ];

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("classes", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={Classes}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={Classes[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.type")}
                value={Classes[selectedItem].type}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.venus")}
                value={Classes[selectedItem].venus}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 14 }}
                onChange={(event) => handleChange("venus", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mercury")}
                value={Classes[selectedItem].mercury}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 14 }}
                onChange={(event) =>
                  handleChange("mercury", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mars")}
                value={Classes[selectedItem].mars}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 14 }}
                onChange={(event) => handleChange("mars", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.jupiter")}
                value={Classes[selectedItem].jupiter}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 14 }}
                onChange={(event) =>
                  handleChange("jupiter", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.hp")}
                value={Classes[selectedItem].hp}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("hp", event.target.value)}
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.pp")}
                value={Classes[selectedItem].pp}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("pp", event.target.value)}
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.attack")}
                value={Classes[selectedItem].attack}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("attack", event.target.value)}
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.defense")}
                value={Classes[selectedItem].defense}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("defense", event.target.value)
                }
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.agility")}
                value={Classes[selectedItem].agility}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("agility", event.target.value)
                }
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                label={t("inputs.luck")}
                value={Classes[selectedItem].luck}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("luck", event.target.value)}
              >
                {percentages.map((percent, index) => (
                  <option key={index} value={index}>
                    {percent}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}></Grid>
            {[...new Array(16)].map((_, index) => (
              <Fragment key={index}>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label={`${t("inputs.level")} ${index + 1}`}
                    value={Classes[selectedItem][`level_${index + 1}`]}
                    fullWidth
                    inputProps={{ step: 1, min: 0, max: 99 }}
                    onChange={(event) =>
                      handleChange(`level_${index + 1}`, event.target.value)
                    }
                  />
                </Grid>
                <Grid key={index} item xs={3}>
                  <TextField
                    select
                    label={`${t("inputs.ability")} ${index + 1}`}
                    value={Classes[selectedItem][`ability_${index + 1}`]}
                    fullWidth
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) =>
                      handleChange(`ability_${index + 1}`, event.target.value)
                    }
                  >
                    {abilities.map((ability: Ability, index: number) => (
                      <option key={index} value={index}>
                        {ability.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Classes;

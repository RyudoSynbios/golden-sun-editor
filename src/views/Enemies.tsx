import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import View from "../components/View";

import { Ability, Item } from "../utils/loader";

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

function Enemies({ enemies, items, abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  const dropRates = [
    "Never",
    "100.00%",
    "50.00%",
    "25.00%",
    "12.50%",
    "6.25%",
    "3.125%",
    "1.56%",
    "0.78%",
    "0.39%",
  ];

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("enemies", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={enemies}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={enemies[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.level")}
                value={enemies[selectedItem].level}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 99 }}
                onChange={(event) => handleChange("level", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.hp")}
                value={enemies[selectedItem].hp}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 32767 }}
                onChange={(event) => handleChange("hp", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.pp")}
                value={enemies[selectedItem].pp}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 32767 }}
                onChange={(event) => handleChange("pp", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.attack")}
                value={enemies[selectedItem].attack}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) => handleChange("attack", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.defense")}
                value={enemies[selectedItem].defense}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) =>
                  handleChange("defense", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.agility")}
                value={enemies[selectedItem].agility}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) =>
                  handleChange("agility", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.luck")}
                value={enemies[selectedItem].luck}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) => handleChange("luck", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.hpRegen")}
                value={enemies[selectedItem].hp_regen}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("hp_regen", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.ppRegen")}
                value={enemies[selectedItem].pp_regen}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("pp_regen", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.turns")}
                value={enemies[selectedItem].turns}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 2 }}
                onChange={(event) => handleChange("turns", event.target.value)}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            {[...new Array(4)].map((_, index) => (
              <Fragment key={index}>
                <Grid key={index} item xs={3}>
                  <TextField
                    select
                    label={`${t("inputs.item")} ${index + 1}`}
                    value={enemies[selectedItem][`item_${index + 1}`]}
                    fullWidth
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) =>
                      handleChange(`item_${index + 1}`, event.target.value)
                    }
                  >
                    {items.map((item: Item, index: number) => (
                      <option key={index} value={index}>
                        {item.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label={`${t("inputs.quantity")} ${index + 1}`}
                    value={enemies[selectedItem][`quantity_${index + 1}`]}
                    fullWidth
                    inputProps={{ step: 1, min: 0, max: 255 }}
                    onChange={(event) =>
                      handleChange(`quantity_${index + 1}`, event.target.value)
                    }
                  />
                </Grid>
              </Fragment>
            ))}
            <Grid item xs={12}></Grid>
            {[...new Array(8)].map((_, index) => (
              <Grid key={index} item xs={3}>
                <TextField
                  select
                  label={`${t("inputs.ability")} ${index + 1}`}
                  value={enemies[selectedItem][`ability_${index + 1}`]}
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
            ))}
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.experience")}
                value={enemies[selectedItem].experience}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) =>
                  handleChange("experience", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.coins")}
                value={enemies[selectedItem].coins}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) => handleChange("coins", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.drop")}
                value={enemies[selectedItem].drop_item}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("drop_item", event.target.value)
                }
              >
                {items.map((item: Item, index: number) => (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.dropRate")}
                value={enemies[selectedItem].drop_rate}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("drop_rate", event.target.value)
                }
              >
                {dropRates.map((rate, index) => (
                  <option key={index} value={index}>
                    {rate}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Enemies;

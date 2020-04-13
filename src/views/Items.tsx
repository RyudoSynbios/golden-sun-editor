import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

function Items({ items, abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  const types = [
    "Item",
    "Weapon",
    "Bodywear",
    "Armwear",
    "Headgear",
    "Legwear",
    "Psynergy Bestowing",
    "",
    "Ring",
    "Open",
  ];

  const uses = [
    "Multiple uses",
    "Single-use",
    "Breaks when used",
    "Bestows Psynergy",
    "Item will change",
  ];

  const unleashRates = [
    "0%",
    "5%",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "40%",
    "45%",
    "50%",
    "55%",
    "60%",
    "65%",
    "70%",
    "75%",
    "80%",
    "85%",
    "90%",
    "95%",
    "100%",
  ];

  const effects = [
    "No effect",
    "+ Max HP",
    "+ HP recovery",
    "+ Max PP",
    "+ PP recovery",
    "+ Agility",
    "+ Luck",
    "x Max HP",
    "x HP recovery",
    "x Max PP",
    "x PP recovery",
    "x Attack",
    "x Defense",
    "x Agility",
    "x Luck",
    "Venus Power",
    "Mercury Power",
    "Mars Power",
    "Jupiter Power",
    "Venus Resist",
    "Mercury Resist",
    "Mars Resist",
    "Jupiter Resist",
    "Critical Hits increase",
    "Counterstrike rate",
    "The curse can be removed",
    "Turns",
    "Boosts monster encounters",
  ];

  const specials = {
    1: "Curses when equipped",
    2: "Can't be removed",
    4: "Rare item",
    8: "Important item",
    16: "Carry up to 30",
  };

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("items", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List items={items} selectedItem={selectedItem} onClick={handleClick} />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={items[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={t("inputs.description")}
                value={items[selectedItem].description}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.type")}
                value={items[selectedItem].type}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("type", event.target.value)}
              >
                {types.map(
                  (type, index) =>
                    type !== "" && (
                      <option key={index} value={index}>
                        {type}
                      </option>
                    )
                )}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.price")}
                value={items[selectedItem].price}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 32767 }}
                onChange={(event) => handleChange("price", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.uses")}
                value={items[selectedItem].uses}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("uses", event.target.value)}
              >
                {uses.map((use, index) => (
                  <option key={index} value={index}>
                    {use}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.attack")}
                inputProps={{ step: 1, min: 0, max: 32767 }}
                value={items[selectedItem].attack}
                fullWidth
                onChange={(event) => handleChange("attack", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.defense")}
                inputProps={{ step: 1, min: 0, max: 127 }}
                value={items[selectedItem].defense}
                fullWidth
                onChange={(event) =>
                  handleChange("defense", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.characters")}
                value={items[selectedItem].characters}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.icon")}
                value={items[selectedItem].icon}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}></Grid>
            {[...new Array(4)].map((_, index) => (
              <Fragment key={index}>
                <Grid key={index} item xs={3}>
                  <TextField
                    select
                    label={`${t("inputs.effect")} ${index + 1}`}
                    value={items[selectedItem][`effect_${index + 1}`]}
                    fullWidth
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) =>
                      handleChange(`effect_${index + 1}`, event.target.value)
                    }
                  >
                    {effects.map((effect, index) => (
                      <option key={index} value={index}>
                        {effect}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label={`${t("inputs.effect")} ${index + 1}`}
                    value={items[selectedItem][`effect_${index + 1}_value`]}
                    fullWidth
                    inputProps={{ step: 1, min: 0, max: 127 }}
                    onChange={(event) =>
                      handleChange(
                        `effect_${index + 1}_value`,
                        event.target.value
                      )
                    }
                  />
                </Grid>
              </Fragment>
            ))}
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>
              <TextField
                select
                label={t("inputs.unleash")}
                value={items[selectedItem].unleash}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("unleash", event.target.value)
                }
              >
                {abilities.map((ability: Ability, index: number) => (
                  <option key={index} value={index}>
                    {ability.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label={t("inputs.unleashRate")}
                value={items[selectedItem].unleash_rate}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("unleash_rate", event.target.value)
                }
              >
                {unleashRates.map((rate, index) => (
                  <option key={index} value={index}>
                    {rate}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label={t("inputs.use")}
                value={items[selectedItem].ability_on_use}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("ability_on_use", event.target.value)
                }
              >
                {abilities.map((ability: Ability, index: number) => (
                  <option key={index} value={index}>
                    {ability.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {Object.keys(specials).map((item, index) => {
                const text = Object.values(specials)[index];
                // const checked = Object.values(special)[index];

                return (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        color="primary"
                        name={`special-${item}`}
                        // checked={checked}
                        disabled
                        // onChange={() => handleSpecialChange(item, !checked)}
                      />
                    }
                    label={text}
                  />
                );
              })}
            </Grid>
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Items;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import ImageSelector from "../components/ImageSelector";
import View from "../components/View";

import { decompressIcons } from "../utils/graphics";
import { Item } from "../utils/loader";

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

function PartyMembers({ items, partyMembers, graphics, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  const portraits = graphics.portraits.map((portrait: any) =>
    decompressIcons(portrait.data, portrait.palette, 32)
  );

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    if (name === "portrait") {
      onChange("partyMembers.portraits", selectedItem, name, value);
    } else if (
      name === "level" ||
      name === "venus" ||
      name === "mercury" ||
      name === "mars" ||
      name === "jupiter" ||
      name.match("hp") ||
      name.match("pp") ||
      name.match("attack") ||
      name.match("defense") ||
      name.match("agility") ||
      name.match("luck") ||
      name.match("item")
    ) {
      onChange("partyMembers.stats", selectedItem, name, value);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={partyMembers}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <ImageSelector
                width={64}
                images={portraits}
                value={partyMembers[selectedItem].portrait}
                disabled={partyMembers[selectedItem].portrait === null}
                onChange={(value) => handleChange("portrait", value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={partyMembers[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.startingLevel")}
                value={partyMembers[selectedItem].level}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 99 }}
                onChange={(event) => handleChange("level", event.target.value)}
              />
            </Grid>
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.hp")} ${index + 1}`}
                  value={partyMembers[selectedItem][`hp_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`hp_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.pp")} ${index + 1}`}
                  value={partyMembers[selectedItem][`pp_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`pp_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.attack")} ${index + 1}`}
                  value={partyMembers[selectedItem][`attack_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`attack_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.defense")} ${index + 1}`}
                  value={partyMembers[selectedItem][`defense_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`defense_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.agility")} ${index + 1}`}
                  value={partyMembers[selectedItem][`agility_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`agility_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            {[...new Array(6)].map((_, index) => (
              <Grid key={index} item xs={4}>
                <TextField
                  type="number"
                  label={`${t("inputs.luck")} ${index + 1}`}
                  value={partyMembers[selectedItem][`luck_${index + 1}`]}
                  fullWidth
                  // inputProps={{ step: 1, min: 0, max: 4 }}
                  onChange={(event) =>
                    handleChange(`luck_${index + 1}`, event.target.value)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} />
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.venus")}
                value={partyMembers[selectedItem].venus}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) => handleChange("venus", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mercury")}
                value={partyMembers[selectedItem].mercury}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("mercury", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.mars")}
                value={partyMembers[selectedItem].mars}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) => handleChange("mars", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("attributes.jupiter")}
                value={partyMembers[selectedItem].jupiter}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 255 }}
                onChange={(event) =>
                  handleChange("jupiter", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}></Grid>
            {[...new Array(13)].map((_, index) => (
              <Grid key={index} item xs={3}>
                <TextField
                  select
                  label={`${t("inputs.item")} ${index + 1}`}
                  value={partyMembers[selectedItem][`item_${index + 1}`]}
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
            ))}
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default PartyMembers;

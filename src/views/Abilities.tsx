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

function Abilities({ abilities, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  const targets = ["???", "Enemy", "Ally", "???", "User"];

  const attributes = [
    "Earth attribute",
    "Water attribute",
    "Fire attribute",
    "Wind attribute",
    "No attributes",
  ];

  const types = [
    "?",
    "Healing",
    "Effect Only",
    "Added Damage",
    "Multiplier",
    "Base Damage",
    "Base Damage (Diminishing)",
    "Effect Only (Always First)",
    "Summon",
    "Utility",
    "Psynergy Drain",
    "Psynergy Recovery",
  ];

  const effects = [
    "Nothing",
    "?",
    "?",
    "Cure poison",
    "Cure stun, sleep, delusion",
    "Revive",
    "Boost Attack by 25%",
    "Boost Attack by 12.5%",
    "Drop Attack by 25%",
    "Drop Attack by 12.5%",
    "Boost Defense by 25%",
    "Boost Defense by 12.5%",
    "Drop Defense by 25%",
    "Drop Defense by 12.5%",
    "Boost Resistance by 40",
    "Boost Resistance by 20",
    "Drop Resistance by 40",
    "Drop Resistance by 20",
    "May inflict Poison",
    "May inflict Venom",
    "Inflict Delusion",
    "Inflict Confusion",
    "(Charm)",
    "May inflict Stun",
    "May inflict Sleep",
    "May inflict Seal",
    "May inflict Haunt",
    "May inflict Death",
    "May inflict Death Curse",
    "Regenerate 60% of HP for 5 turns",
    "(Reflect)",
    "User may take HP from target",
    "User may take PP from target",
    "Eleminate status boosts",
    "May reduce HP to 1",
    "May ignore 50% of Defense",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "May cause double the damage",
    "?",
    "May cause triple the damage",
    "(Threaten/Element Swap/Pressure)",
    "Decrease damage by 50% for 1 turn",
    "Decrease damage by 90% for 1 turn",
    "(Sidestep)",
    "Flee",
    "(Speed Surge/Ally Search)",
    "(Battle Cry)",
    "(Crazy Voice)",
    "Paralyzes foe for 1 turn",
    "?",
    "User Dies",
    "Revive to 50% HP",
    "Revive to 80% HP",
    "Halve Agility",
    "Double Agility",
    "User recovers 50% of damage to HP",
    "Recover 60% of HP",
    "Recover 30% of HP",
    "Recover 7% of PP",
    "Remove all status ailments",
    "May cause double the damage",
    "Get two turns next round",
    "Inflicts Seal",
    "May cause triple the damage",
    "User may recover 10% of damage to PP",
    "Recover 50% of HP",
    "Recover 70% of HP",
    "Decrease damage by 60% for 1 turn",
    "Revive to 60% HP",
    "counter-attack for 1 turn",
    "May inflict Delusion on all enemies",
    "Recover 40% of HP",
    "Recover 10% of PP",
    "Recover 30% of PP",
    "Vanish into thin air",
    "Inflicts Death Curse",
    "Instantly end round",
    "May force target out of battle",
    "Lose 12% of HP and may lose next turn",
    "Lose 10% of PP",
    "May inflict Stun",
    "(Mystic Call/Clarion Cry)",
    "(Regen Dance)",
    "Decrease damage by 95% for 1 turn",
    "May multiply damage by 1, 2, or 3",
    "Ignore Defense",
    "Trident",
  ];

  const utilities = [
    "Nothing",
    "Move",
    "Mind Read",
    "Ply",
    "Force",
    "Douse",
    "Frost",
    "Lift",
    "Reveal",
    "Halt",
    "Cloak",
    "Carry",
    "Growth",
    "Catch",
    "Whirlwind",
    "Retreat",
    "Avoid",
    "Lash",
    "Pound",
    "Tremor",
    "Scoop",
    "Burst",
    "Parch",
    "Sand",
    "Hover",
    "Cyclone",
    "Blaze",
    "Grind",
    "Magic Circle",
    "Arrow",
    "Teleport",
  ];

  const ranges = ["0", "1", "3", "5", "7", "", "9"];
  ranges[255] = "11";

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("abilities", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={abilities}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.name")}
                value={abilities[selectedItem].name}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={t("inputs.description")}
                value={abilities[selectedItem].description}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="text"
                label={t("inputs.icon")}
                value={abilities[selectedItem].icon}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.target")}
                value={abilities[selectedItem].target}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("target", event.target.value)}
              >
                {targets.map((target, index) => (
                  <option key={index} value={index}>
                    {target}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.range")}
                value={abilities[selectedItem].range}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("range", event.target.value)}
              >
                {ranges.map(
                  (range, index) =>
                    range !== "" && (
                      <option key={index} value={index}>
                        {range}
                      </option>
                    )
                )}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.ppCost")}
                value={abilities[selectedItem].pp_cost}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 99 }}
                onChange={(event) =>
                  handleChange("pp_cost", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="number"
                label={t("inputs.power")}
                value={abilities[selectedItem].power}
                fullWidth
                inputProps={{ step: 1, min: 0, max: 65535 }}
                onChange={(event) => handleChange("power", event.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.type")}
                value={abilities[selectedItem].type}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                disabled
                onChange={(event) => handleChange("type", event.target.value)}
              >
                {types.map((type, index) => (
                  <option key={index} value={index}>
                    {type}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.attribute")}
                value={abilities[selectedItem].attribute}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("attribute", event.target.value)
                }
              >
                {attributes.map((attribute, index) => (
                  <option key={index} value={index}>
                    {attribute}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.effect")}
                value={abilities[selectedItem].effect}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("effect", event.target.value)}
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
                select
                label={t("inputs.utility")}
                value={abilities[selectedItem].utility}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) =>
                  handleChange("utility", event.target.value)
                }
              >
                {utilities.map((utility, index) => (
                  <option key={index} value={index}>
                    {utility}
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

export default Abilities;

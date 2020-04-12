import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import View from "../components/View";

import { Enemy } from "../utils/loader";

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

function Groups({ groups, enemies, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("groups", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List
          items={groups}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
        <View>
          <Grid container spacing={3}>
            {[...new Array(5)].map((_, index) => (
              <Fragment key={index}>
                <Grid item xs={8}>
                  <TextField
                    select
                    label={`${t("inputs.enemy")} ${index + 1}`}
                    value={groups[selectedItem][`enemy_${index + 1}`]}
                    fullWidth
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) =>
                      handleChange(`enemy_${index + 1}`, event.target.value)
                    }
                  >
                    {enemies.map((enemy: Enemy, index: number) => (
                      <option key={index} value={index}>
                        {enemy.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label={t("inputs.minimum")}
                    value={groups[selectedItem][`minimum_${index + 1}`]}
                    fullWidth
                    inputProps={{ step: 1, min: 0, max: 4 }}
                    onChange={(event) =>
                      handleChange(`minimum_${index + 1}`, event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label={t("inputs.maximum")}
                    value={groups[selectedItem][`maximum_${index + 1}`]}
                    fullWidth
                    inputProps={{ step: 1, min: 0, max: 4 }}
                    onChange={(event) =>
                      handleChange(`maximum_${index + 1}`, event.target.value)
                    }
                  />
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </View>
      </div>
    </div>
  );
}

export default Groups;

import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import List from "../components/List";
import View from "../components/View";

import { shopsTypes } from "../utils/enums";
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

function Shops({ shops, items, onChange }: any) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(0);

  function handleClick(index: number) {
    setSelectedItem(index);
  }

  function handleChange(name: string, value: any) {
    onChange("shops", selectedItem, name, value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <List items={shops} selectedItem={selectedItem} onClick={handleClick} />
        <View>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                select
                label={t("inputs.type")}
                value={shops[selectedItem].type}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                onChange={(event) => handleChange("type", event.target.value)}
              >
                {shopsTypes.map((type: string, index: number) => (
                  <option key={index} value={index}>
                    {t(`shops.types.${type}`)}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} />
            {[...new Array(24)].map((_, index) => (
              <Fragment key={index}>
                <Grid item xs={3}>
                  <TextField
                    select
                    label={`${t("inputs.item")} ${index + 1}`}
                    value={shops[selectedItem][`item_${index + 1}`]}
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
              </Fragment>
            ))}
            <Grid item xs={12} />
            {[...new Array(8)].map((_, index) => (
              <Fragment key={index}>
                <Grid item xs={3}>
                  <TextField
                    select
                    label={`${t("inputs.artifact")} ${index + 1}`}
                    value={shops[selectedItem][`artifact_${index + 1}`]}
                    fullWidth
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) =>
                      handleChange(`artifact_${index + 1}`, event.target.value)
                    }
                  >
                    {items.map((item: Item, index: number) => (
                      <option key={index} value={index}>
                        {item.name}
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

export default Shops;

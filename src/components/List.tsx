import React from "react";
import classNames from "classnames";

import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

interface ListProps {
  items: Array<any>;
  selectedItem: number;
  onClick: (index: number) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    overflow: "auto",
  },
  listItemSelected: {
    "& > div > span": {
      color: theme.palette.primary.main,
    },
  },
  index: {
    marginRight: theme.spacing(1),
    width: 30,
    textAlign: "right",
  },
  name: {
    width: 150,
  },
}));

function List({ items, selectedItem, onClick }: ListProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MuiList>
        {items.map((item, index: number) => (
          <ListItem
            key={index}
            button
            className={classNames({
              [classes.listItemSelected]: index === selectedItem,
            })}
            onClick={() => onClick(index)}
          >
            <ListItemText primary={index} className={classes.index} />
            <ListItemText primary={item.name} className={classes.name} />
          </ListItem>
        ))}
      </MuiList>
    </Paper>
  );
}

export default List;

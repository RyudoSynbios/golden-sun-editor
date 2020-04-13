import React from "react";
import classNames from "classnames";
import { AutoSizer, List as RvList } from "react-virtualized";

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
    display: "flex",
    width: 220,
    borderRadius: 0,
    overflow: "auto",
  },
  list: {
    flex: 1,
    // paddingBottom: 0,
  },
  rvList: {
    outline: "none",
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

  const rowRenderer = ({ key, index, style }: any) => {
    return (
      <ListItem
        key={key}
        button
        className={classNames({
          [classes.listItemSelected]: index === selectedItem,
        })}
        style={style}
        onClick={() => onClick(index)}
      >
        <ListItemText primary={index} className={classes.index} />
        <ListItemText primary={items[index].name} className={classes.name} />
      </ListItem>
    );
  };

  return (
    <Paper className={classes.root}>
      <MuiList className={classes.list}>
        <AutoSizer>
          {({ height, width }) => (
            <RvList
              width={width}
              height={height}
              rowCount={items.length}
              rowHeight={48}
              rowRenderer={rowRenderer}
              className={classes.rvList}
            />
          )}
        </AutoSizer>
      </MuiList>
    </Paper>
  );
}

export default List;

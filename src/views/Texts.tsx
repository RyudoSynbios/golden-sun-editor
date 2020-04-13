import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import View from "../components/View";
import VirtualizedTable from "../components/VirtualizedTable";

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

function Texts({ texts }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <View>
          <VirtualizedTable
            rowCount={texts.length}
            rowGetter={({ index }: any) => texts[index]}
            columns={[
              {
                width: 72,
                dataKey: "index",
                align: "right",
              },
              {
                dataKey: "text",
              },
            ]}
          />
        </View>
      </div>
    </div>
  );
}

export default Texts;

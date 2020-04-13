import React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";

import TableCell from "@material-ui/core/TableCell";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flexContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  tableCell: {
    flex: 1,
  },
});

// TODO: findDOMNode was passed an instance of Grid which is inside StrictMode. Instead, add a ref directly to the element you want to reference.
// TODO: width is mandatory, wait for a fix from react-virtualized

function VirtualizedTable({ columns, headerHeight, ...tableProps }: any) {
  const classes = useStyles();

  const cellRenderer = ({ cellData, columnIndex }: any) => {
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        align={columns[columnIndex].align}
      >
        {cellData}
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={53}
          gridStyle={{
            direction: "inherit",
            outline: "none",
          }}
          rowClassName={() => classes.flexContainer}
          {...tableProps}
        >
          {columns.map(({ dataKey, width, ...other }: any) => {
            return (
              <Column
                key={dataKey}
                className={classes.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                width={width}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
}

export default VirtualizedTable;

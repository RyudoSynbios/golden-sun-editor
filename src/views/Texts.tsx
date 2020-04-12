import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/core/styles";

import View from "../components/View";

interface TextsProps {
  texts: string[];
}

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

function Texts({ texts }: TextsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <View>
          <Table>
            <TableBody>
              {texts.map((text: string, index: number) => (
                <TableRow key={index}>
                  <TableCell align="right">{index}</TableCell>
                  <TableCell>{text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </View>
      </div>
    </div>
  );
}

export default Texts;

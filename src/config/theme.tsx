import red from "@material-ui/core/colors/red";

import palette from "./palette";

const theme = {
  palette: {
    primary: palette,
    secondary: red,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#ffffff",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "linear-gradient(45deg, #133461, #11315d)",
        },
      },
    },
    MuiTab: {
      root: {
        "@media (min-width: 600px)": {
          minWidth: 100,
        },
      },
    },
    MuiTabs: {
      root: {
        flex: 1,
      },
    },
  },
};

export default theme;

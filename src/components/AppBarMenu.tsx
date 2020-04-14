import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import EjectIcon from "@material-ui/icons/Eject";
import InfoIcon from "@material-ui/icons/Info";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TranslateIcon from "@material-ui/icons/Translate";

import LanguageSwitcher from "./LanguageSwitcher";

interface AppBarMenuProps {
  onAboutClick: () => void;
  onEjectClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  menu: {
    "& > li": {
      height: 44,
    },
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function AppBarMenu({ onAboutClick, onEjectClick }: AppBarMenuProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  function handleMenuClose() {
    setAccountAnchorEl(null);
  }

  function handleMenuOpen(event: any) {
    setAccountAnchorEl(event.currentTarget);
  }

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        getContentAnchorEl={null}
        anchorEl={accountAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(accountAnchorEl)}
        classes={{ list: classes.menu }}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <LanguageSwitcher />
        </MenuItem>
        <MenuItem
          onClick={() => {
            onAboutClick();
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <Typography>{t("general.about")}</Typography>
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem
          onClick={() => {
            onEjectClick();
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <EjectIcon color="secondary" />
          </ListItemIcon>
          <Typography color="secondary">{t("general.eject")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default AppBarMenu;

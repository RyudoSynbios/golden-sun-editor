import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core/styles";

import SaveIcon from "@material-ui/icons/Save";

import About from "./components/About";
import AppBarMenu from "./components/AppBarMenu";
import Confirm from "./components/Confirm";
import Dropzone from "./components/Dropzone";

import addresses from "./utils/addresses";
import { shopsTypes } from "./utils/enums";
import loader, { Game, initialStateGame } from "./utils/loader";

import Abilities from "./views/Abilities";
import Classes from "./views/Classes";
import Djinn from "./views/Djinn";
import Enemies from "./views/Enemies";
import Groups from "./views/Groups";
import Items from "./views/Items";
import Maps from "./views/Maps";
import PartyMembers from "./views/PartyMembers";
import Shops from "./views/Shops";
import Sprites from "./views/Sprites";
import Summons from "./views/Summons";
import Texts from "./views/Texts";

const useStyles = makeStyles({
  app: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    overflow: "hidden",
  },
  toolbar: {
    display: "block",
    "& > div": {
      display: "flex",
    },
    "& > div:first-child": {
      alignItems: "center",
      height: 48,
    },
  },
  logo: {
    height: 40,
  },
  flex: {
    flex: 1,
  },
  toolbarContent: {
    height: 96,
  },
  content: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
  },
});

function App() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rom, setRom] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [ejectOpen, setEjectOpen] = useState<boolean>(false);
  const [game, setGame] = useState<Game>(initialStateGame);
  const [tab, setTab] = useState<string>("items");
  const [changes, setChanges] = useState<any>([]);

  function handleAboutClick() {
    setAboutOpen(true);
  }

  function handleAboutClose() {
    setAboutOpen(false);
  }

  function handleEject() {
    setGame(initialStateGame);
  }

  function handleEjectClick() {
    if (changes.length > 0) {
      setEjectOpen(true);
    } else {
      handleEject();
    }
  }

  function handleEjectClose() {
    setEjectOpen(false);
  }

  function handleFileChange(file: File) {
    setIsLoading(true);
    // TODO: Without setTimeout, the CircularProgress is not complete, waiting for a fix
    setTimeout(
      () => setRom(loader(file, setIsLoading, setError, setGame)),
      500
    );
  }

  function handleTabChange(_: ChangeEvent<{}>, tab: string) {
    setTab(tab);
  }

  function handleChange(
    section: string,
    index: number,
    name: string,
    value: any
  ) {
    let subsection;
    let updatedGame: any = game;
    let newChanges = changes;

    [section, subsection] = section.split(".");

    const initialValue = updatedGame[section][index][name];
    updatedGame[section][index][name] = value;

    if (subsection) {
      section += subsection.charAt(0).toUpperCase() + subsection.slice(1);
    }

    // TODO: Change
    if (section === "summons" && name === "ability") {
      updatedGame.summons[index].name = game.abilities[value].name;
      updatedGame.summons[index].description =
        game.abilities[value].description;
    } else if (section === "groups" && name === "enemy_1") {
      updatedGame.groups[index].name = game.enemies[value].name;
    } else if (section === "shops" && name === "type") {
      updatedGame.shops[index].name = t(`shops.types.${shopsTypes[value]}`);
    }

    setGame({ ...updatedGame });
    let changesIndex = changes.findIndex(
      (change: any) =>
        change.section === section &&
        change.index === index &&
        change.name === name
    );
    if (changesIndex !== -1) {
      if (value.toString() === changes[changesIndex].initialValue.toString()) {
        newChanges.splice(changesIndex, 1);
      } else {
        newChanges[changesIndex].value = value;
      }
    } else if (value.toString() !== initialValue.toString()) {
      newChanges.push({ section, index, name, initialValue, value });
    }
    setChanges(newChanges);
  }

  function handleSave() {
    const addressesUnTyped: any = addresses;
    changes.forEach((change: any) => {
      const section = addressesUnTyped[change.section];
      const attribut = section.attributs[change.name];
      let offset =
        (section.pointer
          ? rom.readBytes(section.pointer[game.zone], 32)
          : section.offset[game.zone]) +
        change.index * section.section_length +
        attribut.offset;
      rom.writeByte(offset, change.value, attribut.octets);
    });
    rom.save();
    setChanges([]);
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.app}>
        {(game.zone === -1 && (
          <Dropzone
            isLoading={isLoading}
            error={error}
            onChange={handleFileChange}
          />
        )) || (
          <>
            <AppBar color="default" elevation={1}>
              <Toolbar variant="dense" className={classes.toolbar}>
                <div>
                  <img
                    src="img/golden-sun-1.png"
                    alt="Golden Sun 1"
                    className={classes.logo}
                  />
                  <div className={classes.flex} />
                  <AppBarMenu
                    onAboutClick={handleAboutClick}
                    onEjectClick={handleEjectClick}
                  />
                </div>
                <div>
                  <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    value={tab}
                    onChange={handleTabChange}
                  >
                    <Tab label={t("sections.items")} value="items" />
                    <Tab label={t("sections.abilities")} value="abilities" />
                    <Tab label={t("sections.classes")} value="classes" />
                    <Tab label={t("sections.djinn")} value="djinn" />
                    <Tab label={t("sections.summons")} value="summons" />
                    <Tab label={t("sections.enemies")} value="enemies" />
                    <Tab label={t("sections.groups")} value="groups" />
                    <Tab label={t("sections.shops")} value="shops" />
                    <Tab
                      label={t("sections.partyMembers")}
                      value="partyMembers"
                    />
                    <Tab label={t("sections.sprites")} value="sprites" />
                    <Tab label={t("sections.maps")} value="maps" />
                    <Tab label={t("sections.texts")} value="texts" />
                  </Tabs>
                  <Button
                    color="primary"
                    startIcon={<SaveIcon />}
                    disabled={changes.length === 0}
                    onClick={handleSave}
                  >
                    {t("general.save")}
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
            <Toolbar variant="dense" className={classes.toolbarContent} />
            <div className={classes.content}>
              {tab === "items" && (
                <Items
                  items={game.items}
                  abilities={game.abilities}
                  graphics={game.graphics}
                  onChange={handleChange}
                />
              )}
              {tab === "abilities" && (
                <Abilities
                  abilities={game.abilities}
                  graphics={game.graphics}
                  inputs={game.inputs}
                  onChange={handleChange}
                />
              )}
              {tab === "classes" && (
                <Classes
                  Classes={game.classes}
                  abilities={game.abilities}
                  onChange={handleChange}
                />
              )}
              {tab === "djinn" && (
                <Djinn
                  djinn={game.djinn}
                  abilities={game.abilities}
                  onChange={handleChange}
                />
              )}
              {tab === "summons" && (
                <Summons
                  summons={game.summons}
                  abilities={game.abilities}
                  onChange={handleChange}
                />
              )}
              {tab === "enemies" && (
                <Enemies
                  enemies={game.enemies}
                  items={game.items}
                  abilities={game.abilities}
                  onChange={handleChange}
                />
              )}
              {tab === "groups" && (
                <Groups
                  groups={game.groups}
                  enemies={game.enemies}
                  onChange={handleChange}
                />
              )}
              {tab === "shops" && (
                <Shops
                  shops={game.shops}
                  items={game.items}
                  onChange={handleChange}
                />
              )}
              {tab === "partyMembers" && (
                <PartyMembers
                  items={game.items}
                  partyMembers={game.partyMembers}
                  graphics={game.graphics}
                  onChange={handleChange}
                />
              )}
              {tab === "sprites" && (
                <Sprites sprites={game.sprites} onChange={handleChange} />
              )}
              {tab === "maps" && (
                <Maps maps={game.maps} onChange={handleChange} />
              )}
              {tab === "texts" && <Texts texts={game.texts} />}
            </div>
            <About open={aboutOpen} onClose={handleAboutClose} />
            <Confirm
              open={ejectOpen}
              message={t("general.ejectConfirm")}
              action={handleEject}
              onClose={handleEjectClose}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;

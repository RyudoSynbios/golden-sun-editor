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

import Dropzone from "./components/Dropzone";

import addresses from "./utils/addresses";
import loader, { Game, initialStateGame } from "./utils/loader";

import Abilities from "./views/Abilities";
import Djinn from "./views/Djinn";
import Enemies from "./views/Enemies";
import Groups from "./views/Groups";
import Items from "./views/Items";
import Summons from "./views/Summons";
import Texts from "./views/Texts";

const useStyles = makeStyles({
  app: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    overflow: "hidden",
  },
  content: {
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
  const [game, setGame] = useState<Game>(initialStateGame);
  const [tab, setTab] = useState<string>("items");
  const [changes, setChanges] = useState<any>([]);

  function handleFileChange(file: File) {
    setIsLoading(true);
    setRom(loader(file, setIsLoading, setError, setGame));
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
    let updatedGame: any = game;
    let newChanges = changes;
    const initialValue = updatedGame[section][index][name];
    updatedGame[section][index][name] = value;

    // TODO: Change
    if (section === "summons" && name === "ability") {
      updatedGame.summons[index].name = game.abilities[value].name;
      updatedGame.summons[index].description =
        game.abilities[value].description;
    } else if (section === "groups" && name === "enemy_1") {
      updatedGame.groups[index].name = game.enemies[value].name;
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
    } else {
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
              <Toolbar variant="dense">
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  value={tab}
                  onChange={handleTabChange}
                >
                  <Tab label={t("sections.items")} value="items" />
                  <Tab label={t("sections.abilities")} value="abilities" />
                  <Tab label={t("sections.djinn")} value="djinn" />
                  <Tab label={t("sections.summons")} value="summons" />
                  <Tab label={t("sections.enemies")} value="enemies" />
                  <Tab label={t("sections.groups")} value="groups" />
                  <Tab label={t("sections.texts")} value="texts" />
                </Tabs>
                <Button
                  color="primary"
                  disabled={changes.length === 0}
                  onClick={handleSave}
                >
                  <SaveIcon />
                </Button>
              </Toolbar>
            </AppBar>
            <Toolbar variant="dense" />
            <div className={classes.content}>
              {tab === "items" && (
                <Items
                  items={game.items}
                  abilities={game.abilities}
                  onChange={handleChange}
                />
              )}
              {tab === "abilities" && (
                <Abilities abilities={game.abilities} onChange={handleChange} />
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
              {tab === "texts" && <Texts texts={game.texts} />}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

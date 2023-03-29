import { ipcMain } from "electron";

import pathToRows from "./pathsToRows";
import prepareData from "./prepareData";
import groupWords from "./groupWords";

ipcMain.on("process-subtitles", (event, paths) => {
  pathToRows(paths)
    .then((rows) => prepareData(rows))
    .then((preparedData) => groupWords(preparedData))
    .then((groupedWords) => {
      event.reply("process-subtitles", groupedWords);
    });
});

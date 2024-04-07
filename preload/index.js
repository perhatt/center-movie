const { ipcRenderer, isElectron } = require("electron");
function int() {
  window.ipcRenderer = ipcRenderer;
  window.Electron = isElectron;
}
int();

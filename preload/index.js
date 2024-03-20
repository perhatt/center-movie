const { ipcRenderer } = require("electron");
function int() {
  window.ipcRenderer = ipcRenderer;
  window.isElectron =ipcRenderer.isElectron
}
int();

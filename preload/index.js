const { ipcRenderer } = require("electron");
function int() {
  window.ipcRenderer = ipcRenderer;
}
int();

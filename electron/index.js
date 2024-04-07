const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    frame: false,
    center: true,
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/index.js"),
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  //   mainWindow.loadFile("dist/index.html");
  mainWindow.loadURL("http://www.localhost:5173");
  //默认开开发者工具
  // mainWindow.webContents.openDevTools();
  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("maximize-window", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
};

app.on("ready", createWindow);

// 当所有窗口都被关闭后退出
app.on("window-all-closed", function () {
  // 在macOS上，除非用户用Cmd + Q明确退出，否则应用与菜单栏一直保持活跃
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，重新创建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("close-app", () => {
  app.quit();
});

const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("path");

let baseurl = "http://www.localhost:5173/#/";
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

  // mainWindow.loadFile("dist/index.html");
  mainWindow.loadURL(baseurl);
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

// 播放页面创建
let videoWindow = null;
const createVideoWindow = (url) => {
  videoWindow = new BrowserWindow({
    width: 800,
    height: 550,
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
  videoWindow.webContents.openDevTools();
};
ipcMain.on("play-video", (event, id) => {
  const url = baseurl + "play?id=" + id;
  if (videoWindow === null) {
    createVideoWindow();
    videoWindow.loadURL(url);
  } else {
    // 如果 videoWindow 不为 null，则直接加载新的 URL
    videoWindow.loadURL(url);
    //显示videowindow
    videoWindow.show();
  }
});

ipcMain.on("video-minimize", () => {
  videoWindow.minimize();
});

ipcMain.on("video-maximize", () => {
  if (videoWindow.isMaximized()) {
    videoWindow.unmaximize();
  } else {
    videoWindow.maximize();
  }
});

ipcMain.on("close-video-window", () => {
  videoWindow && videoWindow.close();
  videoWindow = null;
});
ipcMain.on("video-window-show", () => {
  videoWindow.show();
});

const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("path");


// 主窗口创建
let baseurl = "http://www.localhost:5173/#/";
let mainWindow = null;
const createWindow = () => {
  mainWindow = new BrowserWindow({
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
  mainWindow.loadURL(baseurl)
  // mainWindow.webContents.openDevTools();

};
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



// app 启动事件
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
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
    parent: mainWindow,
    modal: true,
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/index.js"),
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  // videoWindow.webContents.openDevTools();
};
ipcMain.on("play-video", (event, id) => {
  const url = baseurl + "play?id=" + id;
  if (videoWindow === null) {
    createVideoWindow();
    videoWindow.loadURL(url);
  } else {
    videoWindow.loadURL(url);
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


// login页面创建
let loginWindow = null;
const createLoginWindow = () => {
  loginWindow = new BrowserWindow({
    width: 350,
    height: 400,
    frame: false,
    center: true,
    parent: mainWindow,
    //禁止缩放
    resizable: false,
    modal: true,
    //背景透明
    backgroundColor: "transparent",
    roundedCorners:10,
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/index.js"),
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  loginWindow.webContents.openDevTools();
}
ipcMain.on("open-login-window", () => {
  if (loginWindow === null) {
    createLoginWindow();
    //最小化mainwindow
  } else {
    loginWindow.show();
  }
  loginWindow.loadURL(baseurl + "login");
})
ipcMain.on("close-login-window", () => {
  loginWindow && loginWindow.close();
  loginWindow = null;
})
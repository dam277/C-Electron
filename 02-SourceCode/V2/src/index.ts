import { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem } from 'electron';
import path from 'node:path';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

const menu = new Menu()
menu.append(new MenuItem({label: 'Hello', submenu: [{role: "help", accelerator: "CmdOrCtrl+Shift+H", click: () => {console.log("Hello")}}]}))

Menu.setApplicationMenu(menu)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => 
{
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle("dark-mode:toggle", (e, args: {mode: string, test: string}) => 
{
  if(args.mode == "dark")
    nativeTheme.themeSource = "dark";
  else
    nativeTheme.themeSource = "light";
});

ipcMain.handle("dark-mode:system", () => 
{
  nativeTheme.themeSource = "system";
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
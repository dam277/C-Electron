import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import setupMenu from './app/configs/menu';
import AppWindow from './app/windows/AppWindow';

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => 
{
    const mainWindow = new AppWindow({preloadUrl: 'preload.js'});
    setupMenu();    

    mainWindow.instance.on("closed", () => BrowserWindow.getAllWindows().forEach(window => window.close()));
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') 
        app.quit()
})

app.on('activate', () => 
{
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0)
        new AppWindow()
})
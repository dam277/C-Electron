
import { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem } from 'electron'
import path from 'path';

function createWindow (file = "index.html", url = "") 
{
    // Create the browser window.
    const win = new BrowserWindow(
	{
        width: 800,
        height: 600,
        webPreferences: 
		{
            nodeIntegration: true,
            preload: path.join(__dirname, 'app/preloads/preload.js'),
        }
    })
    
    //load the index.html from a url
    win.loadURL(`file://${__dirname}/${file}#/${url}`);
    
    // Open the DevTools.
    win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => 
{
    createWindow()
    createWindow("index.html", "pop-ups")
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
        createWindow()
})

// Handle dark mode toggling
ipcMain.handle("dark-mode:toggle", (e, args) => 
{
    if(args.mode == "dark")
    	nativeTheme.themeSource = "dark";
    else
    	nativeTheme.themeSource = "light";
});

// Handle dark mode system
ipcMain.handle("dark-mode:system", () => 
{
    nativeTheme.themeSource = "system";
});
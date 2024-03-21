import { app, BrowserWindow } from "electron";
import path from "node:path"

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(`${__dirname}/index.html`)
}

app.whenReady().then(createWindow);
const { contextBridge, ipcRenderer } = require('electron')
// import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  //Nous pouvons exposer des variables en plus des fonctions
})

contextBridge.exposeInMainWorld('darkMode', 
{
  toggle: (mode) => ipcRenderer.invoke('dark-mode:toggle', {mode: mode}),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
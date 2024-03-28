import { BrowserWindow } from 'electron'
import path from 'path';

/**
 * Class to create a new window
 */
class AppWindow
{
    private _instance!: BrowserWindow;       // Window property

    /**
     * Get the window object
     */
    public get instance() : BrowserWindow    
    {
        return this._instance;
    }

    /**
     * Set the window object
     * @param {string} url The url to load
     */
    public set instance(i : BrowserWindow) 
    {
        this._instance = i;
    }

    /**
     * Creates a new window 
     * @param {string} url The url to load
     */
    public constructor(windowOptions: {url?: string, preloadUrl?: string} = {})
    {
        this._instance = this.createWindow(windowOptions);
    }

    /**
     * Creates a new window 
     * @param {string} url The url to load
     * @returns {string} The window created
     */
    private createWindow(windowOptions: {url?: string, preloadUrl?: string}): BrowserWindow
    {
        const { url = "https://discord.com/channels/@me", preloadUrl } = windowOptions;

        const win = new BrowserWindow(
        { 
            width: 1000, height: 600 ,
            webPreferences: 
            {
                preload: preloadUrl ? path.join(__dirname, `../preloads/${preloadUrl}`) : undefined,
            }
        });
        
        url.includes(".html") ? win.loadFile(`${__dirname}/${url}`) : win.loadURL(url);

        win.webContents.openDevTools();
        return win;
    }
    
}

export default AppWindow;
import { app, Menu, MenuItem } from 'electron';
import AppWindow from '../windows/AppWindow';

function setupMenu()
{
    const menu = new Menu();
    menu.append
    (new MenuItem({ label: 'Settings',
        submenu:
        [
            { label: 'Interface',
                click()
                {
                    const interfaceSettingsWindow = new AppWindow({url: '../index.html'});
                }
            }
        ]})
    );
    app.applicationMenu = menu;
}


export default setupMenu;
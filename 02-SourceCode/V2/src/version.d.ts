//declare var window : Window// This is the name of the module that will be imported
declare var versions : Versions
declare var darkMode : DarkMode
declare var electronAPI : ElectronAPI

// interface Window
// {
//     versions: Versions
// }

interface Versions
{
    node(): string
    chrome(): string
    electron(): string
    ping(): Promise<string>
}

interface DarkMode
{
    toggle(value: string): Promise<boolean>
    system(): Promise<boolean>
}
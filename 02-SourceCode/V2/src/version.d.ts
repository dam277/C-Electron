declare var window : Window// This is the name of the module that will be imported

interface Window
{
    versions: Versions
}

interface Versions
{
    node: () => string
    chrome: () => string
    electron: () => string
    ping: () => Promise<string>
}

const information = document.getElementById('info') as HTMLElement
information.innerText = `Cette application utilise Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), et Electron (v${versions.electron()})`

async function func()
{
    const response = await versions.ping()
    //alert(response)
}

func()

async function toggleMode()
{
    let isDarkMode;
    const modeSelector = document.getElementById('darkMode') as HTMLSelectElement;

    if (modeSelector)
    {
        if (modeSelector.value == 'system')
            isDarkMode = await darkMode.system()
        else
            isDarkMode = await darkMode.toggle(modeSelector.value)
    }
}

toggleMode()

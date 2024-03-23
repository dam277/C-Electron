
const information = document.getElementById('info') as HTMLElement
information.innerText = `Cette application utilise Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), et Electron (v${window.versions.electron()})`

async function func()
{
    const response = await window.versions.ping()
    alert(response)
}

func()

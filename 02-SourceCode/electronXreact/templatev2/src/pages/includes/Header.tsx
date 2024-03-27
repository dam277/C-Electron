import React from "react";

function Header() 
{
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

    return(
        <div>
            Header
            <select onChange={() => toggleMode()} name="darkMode" id="darkMode">
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    );
}
    
export default Header;

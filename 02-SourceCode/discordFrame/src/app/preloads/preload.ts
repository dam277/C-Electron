window.addEventListener('DOMContentLoaded', () => 
{
    setTimeout(() => {
        
        const buttons = Array.from(document.getElementsByTagName("button"));
        console.log("buttons", buttons);
    
        console.log(buttons.length);
        buttons.forEach(button => button.innerText = "test");

    }, 5000);
});
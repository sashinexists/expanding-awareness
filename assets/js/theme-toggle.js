console.log(localStorage.getItem("isdarkmode"));

const BODY = document.querySelector("body"); 
const PREFERS_DARK_MODE =
window.matchMedia("(prefers-color-scheme:dark)").matches; 
const THEME_TOGGLE = document.querySelector(".theme-toggle-btn");

THEME_TOGGLE.addEventListener("click", themeToggle); 

function setTheme() {
    if(isDarkMode()) { 
        setDarkMode(); 
    } else { 
        setLightMode(); 
    }  
};

setTheme();

function themeToggle() {
    if(isDarkMode()) { 
        setLightMode(); 
    } else { 
        setDarkMode(); 
    } 
    console.log("localStorage isdarkmode is now " +localStorage.getItem("isdarkmode"));
}
        
function isDarkMode() { 
    console.log("Checking dark mode...");
    return BODY.classList.contains("dark-mode")
            || localStorage.getItem("isdarkmode")==="true"
            || (!BODY.classList.contains("light-mode") 
                && PREFERS_DARK_MODE
                && !localStorage.getItem("isdarkmode")==="false") 
    } 
            
function setLightMode() { 
    console.log("Setting light mode...");
    BODY.classList.add("light-mode"); 
    BODY.classList.remove("dark-mode");

    localStorage.setItem("isdarkmode", "false");
} 
    
function setDarkMode() {
    console.log("Setting dark mode..."); 
    BODY.classList.add("dark-mode"); 
    BODY.classList.remove("light-mode"); 
    localStorage.setItem("isdarkmode", "true");
}
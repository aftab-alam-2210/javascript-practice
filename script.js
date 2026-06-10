if(false){
document.getElementById("startBtn").addEventListener("click", function () {

    let count = 0;
    const fill = document.querySelector(".fill");
    const percentText = document.getElementById("percentText");

    const interval = setInterval(function () {
        if (count < 100) {
            count++;
            fill.style.width = count + "%";
            percentText.textContent = count + "%";
        } else {
            clearInterval(interval);
        }
    }, 30);

});

// set dark or light theme with local storage (to save recent theme color)
function setDarkOrLightTheme(){
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add(localStorage.getItem("theme"));
    } else {
        setdarkOrlightTheme();
    }
    window
    .matchMedia("(prefers-color-scheme: dark}")
    .addEventListener("change", function(){
       if (!localstorage.getItem("theme")){
        setDarkOrLightTheme();
       }
       });
       document.querySelector("button").addEventListener("click",() =>{
       const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
       const newtheme = currentTheme === "dark" ? "light" : "dark";
       applyTheme(newtheme);
         localstorage.setItem("theme", newrheme);
       });

    



}


function createToaster(config) {
    return function (str) {
let div = document.createElement("div")
div.textContent = str;
div.className = "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";
document.querySelector(".parent").appendChild(div);

if (config.positionX !== "left" || config.positionY !== "bottom") {
    document.querySelector(".parent").className +=
` ${config.positionX === "left" ? "left-5" : "right-5"} ${
  config.positionY === "top" ? "top-5" : "bottom-5"
}`;
}
setTimeout(() => {
        document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
    };

}
let toaster =createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});
toaster("Download Done!");
setTimeout(() => {
    toaster("your request has been accepted");
}, 3000);
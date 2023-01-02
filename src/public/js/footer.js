const footer = document.querySelector("footer");

if(!hasOverflow(document.body)) footer.style.bottom = 0;

window.addEventListener("resize", () => {

    if(!hasOverflow(document.body) && footer.style.bottom === "0px") return;

    if(!hasOverflow(document.body)) footer.style.bottom = 0;
    else footer.style.bottom = null;
}, false);

function hasOverflow(element){
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};
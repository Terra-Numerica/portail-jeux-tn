const footer = document.querySelector("footer");

if(!hasOverflow(document.body)) footer.style.bottom = 0;

function hasOverflow(element){
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};
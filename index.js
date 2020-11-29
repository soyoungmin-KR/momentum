const TITLE = document.querySelector ("#title");

const CLICKED_CLASS = "clicked";

function handleClick () {
   TITLE.classList.toggle(CLICKED_CLASS);
}

function init() {
    TITLE.addEventListener("click", handleClick);
}

init();

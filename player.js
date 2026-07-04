const imdb = new URLSearchParams(location.search).get("id");

const frame = document.getElementById("frame");
frame.src = `https://gemma416okl.com/play/${imdb}`;

// Prevent iframe from taking keyboard focus
frame.setAttribute("tabindex", "-1");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

const cursor = document.getElementById("cursor");

function updateCursor() {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

updateCursor();

window.focus();
document.body.focus();

window.addEventListener("keydown", function(e){

    const step = 25;

    switch(e.key){

        case "ArrowLeft":
            x -= step;
            break;

        case "ArrowRight":
            x += step;
            break;

        case "ArrowUp":
            y -= step;
            break;

        case "ArrowDown":
            y += step;
            break;

        case "Enter":

            e.preventDefault();

            console.log("OK Pressed");

            // Keep keyboard focus on parent page
            window.focus();
            document.body.focus();

            return;

        case "Backspace":
        case "Escape":
            history.back();
            return;
    }

    x = Math.max(0, Math.min(window.innerWidth, x));
    y = Math.max(0, Math.min(window.innerHeight, y));

    updateCursor();

}, true);

frame.onload = function(){

    // Refocus parent after iframe loads
    setTimeout(() => {

        window.focus();
        document.body.focus();

    },100);

};

const imdb = new URLSearchParams(location.search).get("id");

const frame = document.getElementById("frame");
frame.src = `https://gemma416okl.com/play/${imdb}`;

// Prevent iframe from receiving keyboard focus
frame.tabIndex = -1;

// Focus parent page
window.focus();
document.body.focus();

// Handle Back button
window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "Backspace":
        case "Escape":
            e.preventDefault();
            history.back();
            break;
    }
}, true);

// Refocus after iframe loads
frame.onload = function () {
    setTimeout(() => {
        window.focus();
        document.body.focus();
    }, 100);
};

// Refocus if window loses focus
window.addEventListener("blur", () => {
    setTimeout(() => {
        window.focus();
        document.body.focus();
    }, 10);
});

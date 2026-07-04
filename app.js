const API = "https://script.google.com/macros/s/AKfycbxCe09JvS-p2Wpfutv_y3lm8qbec1pAML4kecgnUB9ou-mqM8LuqVQnhzmu63DWA7y66Q/exec";

const container = document.getElementById("movies");

async function loadMovies() {
    try {
        container.innerHTML = "<h2>Loading...</h2>";

        const response = await fetch(API);
        const json = await response.json();

        const movies = json.data || [];

        container.innerHTML = "";

        if (movies.length === 0) {
            container.innerHTML = "<h2>No Movies Found</h2>";
            return;
        }

        movies.forEach((movie, index) => {

            const card = document.createElement("div");
            card.className = "movie";
            card.tabIndex = index + 1;

            const poster =
                movie.Poster.startsWith("http")
                    ? movie.Poster
                    : `https://m.media-amazon.com/images/M/${movie.Poster}`;

            card.innerHTML = `
                <img
                    src="${poster}"
                    alt="${movie["Movie Name"]}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/300x450?text=No+Image';"
                >
                <h3>${movie["Movie Name"]}</h3>
            `;

            card.addEventListener("click", () => {
                window.location.href = `player.html?id=${encodeURIComponent(movie["IMDB ID"])}`;
            });

            card.addEventListener("keydown", (e) => {

                if (e.key === "Enter") {
                    card.click();
                }

            });

            container.appendChild(card);

        });

        // Focus first card for TV/Android TV
        const first = document.querySelector(".movie");
        if (first) {
            first.focus();
        }

    } catch (err) {

        console.error(err);

        container.innerHTML = `
            <div style="padding:30px;text-align:center;color:red">
                Failed to load movies.
            </div>
        `;
    }
}

loadMovies();

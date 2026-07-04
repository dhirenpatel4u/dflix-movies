const API="https://script.google.com/macros/s/AKfycbxCe09JvS-p2Wpfutv_y3lm8qbec1pAML4kecgnUB9ou-mqM8LuqVQnhzmu63DWA7y66Q/exec";

fetch(API)
.then(r=>r.json())
.then(data=>{

    const container=document.getElementById("movies");

    data.forEach(movie=>{

        const card=document.createElement("div");
        card.className="movie";
        card.tabIndex=0;

        card.innerHTML=`
        <img src="${movie.Poster}">
        <h3>${movie["Movie Name"]}</h3>
        `;

        card.onclick=()=>{
            location.href=`player.html?imdb=${movie["IMDB ID"]}`;
        };

        card.onkeydown=(e)=>{
            if(e.key==="Enter"){
                card.click();
            }
        };

        container.appendChild(card);

    });

});

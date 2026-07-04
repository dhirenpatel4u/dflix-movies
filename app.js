const API="https://script.google.com/macros/s/AKfycbxCe09JvS-p2Wpfutv_y3lm8qbec1pAML4kecgnUB9ou-mqM8LuqVQnhzmu63DWA7y66Q/exec";

fetch(API)
.then(r=>r.json())
.then(list=>{

const movies=document.getElementById("movies");

list.forEach((movie,index)=>{

const div=document.createElement("div");

div.className="movie";

div.tabIndex=index+1;

div.innerHTML=`
<img src="${movie.Poster}">
<h3>${movie["Movie Name"]}</h3>
`;

div.onclick=()=>{

location.href=`player.html?id=${movie["IMDB ID"]}`;

};

div.addEventListener("keydown",e=>{

if(e.key=="Enter")

div.click();

});

movies.appendChild(div);

});

});

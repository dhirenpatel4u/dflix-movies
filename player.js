const imdb=new URLSearchParams(location.search).get("id");

document.getElementById("frame").src=
`https://gemma416okl.com/play/${imdb}`;

let x=window.innerWidth/2;
let y=window.innerHeight/2;

const cursor=document.getElementById("cursor");

function update(){

cursor.style.left=x+"px";
cursor.style.top=y+"px";

}

update();

document.addEventListener("keydown",e=>{

const step=25;

switch(e.key){

case"ArrowLeft":
x-=step;
break;

case"ArrowRight":
x+=step;
break;

case"ArrowUp":
y-=step;
break;

case"ArrowDown":
y+=step;
break;

case"Enter":

document.getElementById("frame").focus();

break;

}

update();

});

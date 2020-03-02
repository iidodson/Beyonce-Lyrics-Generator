let address = window.location.href;
let height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
const header_length = 78;
const photo_size = 463;

let photo_margin = ((height - header_length)- photo_size)/2;
console.log(photo_margin, height)


let photo_container = document.getElementById("photo");
// photo_container.style.marginTop = photo_margin + "px";

// const width  = window.innerWidth || document.documentElement.clientWidth || 
// document.body.clientWidth;


// console.log(width, height);

const getQuote = () => {
    fetch(address + "lyrics", {mode: 'no-cors'})
    .then(resp =>  resp.json())
    .then(data => {
        document.getElementById("lyric").innerHTML = data.lyric;
        document.getElementById("song").innerHTML = data.song;
    })
    .catch(function () {
      console.log("An error occurred");
    })
};

getQuote()

const getQuote = () => {
    fetch("https://beyonce-lyrics-generator.herokuapp.com/lyrics", {mode: 'no-cors'})
    .then(resp => resp.json())
    .then(data => {
        document.getElementById("lyric").innerHTML = data.lyric;
        document.getElementById("song").innerHTML = data.song;
    })
    .catch(function () {
      console.log("An error occurred");
    })
};








getQuote()

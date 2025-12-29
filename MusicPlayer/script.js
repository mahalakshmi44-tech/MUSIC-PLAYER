const songs = [
  { name: "songs/song1.mp3", title: "Song One", artist: "Artist A" },
  { name: "songs/song2.mp3", title: "Song Two", artist: "Artist B" },
  { name: "songs/song3.mp3", title: "Song Three", artist: "Artist C" }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

loadSong(index);

function loadSong(i) {
  audio.src = songs[i].name;
  title.innerText = songs[i].title;
  artist.innerText = songs[i].artist;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// autoplay next
audio.addEventListener("ended", nextSong);
const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const soundOn = document.querySelector("#soundOn");
const soundOf = document.querySelector("#soundOf");


play.addEventListener("click", handleplay);
pause.addEventListener("click", handlepause);

function handleplay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}

function handlepause() {
  video.pause();
  pause.hidden = true;
  play.hidden = false;
}

backward.addEventListener('click', handleBackward);
forward.addEventListener('click', handleForward);

function handleBackward() {
    // video.currentTime = video.currentTime - 10;
    video.currentTime -= 10;
    console.log('- 10 segundos', video.currentTime);
}

function handleForward() {
    video.currentTime += 10;
    console.log(' + 10 segundos', video.currentTime);
}

soundOn.addEventListener('click', handleSoundOn);
soundOf.addEventListener('click', handleSoundOf);

function handleSoundOn () {
  video.volume = 0;
  soundOn.hidden = true;
  soundOf.hidden = false;
}

function handleSoundOf () {
  video.volume = 1;
  soundOf.hidden = true;
  soundOn.hidden = false;
  
}

const progress = document.querySelector('#range');
video.addEventListener('loadedmetadata', handleLoaded );
video.addEventListener('timeupdate', handleTimeUpdate );

function handleLoaded() {
  progress.max = video.duration;
  console.log('cargo', video.duration);
}

function handleTimeUpdate() {
  progress.value = video.currentTime;
}

progress.addEventListener('input', handleInput);

function handleInput() {
  video.currentTime = progress.value;
  console.log(progress.value);
}


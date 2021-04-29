let playMode = 'sustain';
let sample;

function setup() {
  createCanvas(710, 50);
  soundFormats('mp3', 'ogg');
  sample = loadSound('7120_download_iphone_6_original_ringtone.mp3');
}

function draw() {
  background(255, 255, 0);
  let str = 'Click here to play! Press key to toggle play mode.';
  str += ' Current Play Mode: ' + playMode + '.';
  text(str, 10, height / 2);
}

function mouseClicked() {
  sample.play();
}
function keyPressed(k) {
  togglePlayMode();
}

function togglePlayMode() {
  if (playMode === 'sustain') {
    playMode = 'restart';
  } else {
    playMode = 'sustain';
  }
  sample.playMode(playMode);
}

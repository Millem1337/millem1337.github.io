const spinning = document.getElementById("spinning");
const audio = new Audio('song.mp3');
audio.volume = 0.1
audio.play();

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

async function run(){
    while (true) {
        await sleep(2000);
        spinning.src = "./spinning.gif"
        await sleep(2000);
        spinning.src = "./spinning2.gif"
        await sleep(2000);
        spinning.src = "./spinning3.gif"
    }
}

run()
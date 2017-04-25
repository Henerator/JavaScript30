(function() {
    window.onload = initialize;

    let sounds = {};

    function initialize() {
        createAudio();

        window.addEventListener('keydown', (e) => {
            let key = e.keyCode;
            play(sounds[key]);
        });
    }

    function createAudio() {
        const soundPath = 'assets/sound/'
        const keys = document.getElementsByClassName('key');
        Array.prototype.forEach.call(keys, key => {
            let keyCode = key.getAttribute('data-key');
            let soundName = key.getAttribute('data-sound');

            let sound      = document.createElement('audio');
            sound.src      = `${soundPath}${soundName}.mp3`;
            sound.type     = 'audio/mpeg';
            sounds[keyCode] = sound;
        });
    }

    function play(audio) {
        if (!audio) return;
        
        audio.currentTime=0;
        audio.play();
    }
})();
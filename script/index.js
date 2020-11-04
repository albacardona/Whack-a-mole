window.addEventListener('load', (event) => {

    //      VARIABLES
    let mixedMoles = [];
    let currentMole = '';
    let lastMole = '';
    let allMoles = document.querySelectorAll('.mole');
    let moles = [...allMoles];

    let buttonLeft = document.getElementById('button-left');
    let buttonRight = document.getElementById('button-right');
    let myMusic = new Audio('images/main-loop.wav');
    myMusic.volume = 0.05;
    
    let countdown = document.querySelector('#time');
    let interval = 0;
    let playTime = 90;
    let timeUp = document.getElementById('timeup');
    let endGameTime = playTime * 1000;

    let scoreDiv = document.getElementById('score');
    let score = 0;
    let totalScore = '';
    let finalScore = document.getElementById('final-score');
    


    //      FUNCTIONS
    //      MOLES

    randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    };

    shuffleMoles = () => {
        mixedMoles = moles.sort((a, b) => 0.5 - Math.random());
        currentMole = mixedMoles[0];
        if (currentMole === lastMole) {
            shuffleMoles();
        }
        lastMole = currentMole;
        return currentMole;
    };

    showMoles = () => {
        let time = randomTime(700, 2000);
        let mole = shuffleMoles();
        mole.style.display = 'block';
        setTimeout(() => {
            mole.style.display = 'none';
            showMoles();
        }, time)
    };

    hideAllMoles = () => {
        moles.forEach((mole) => {
            mole.style.display = 'none';
        });
    };

    //      SET BUTTONS

    setStartBtn = () => {
        buttonLeft.src = 'images/Start2.png'
        buttonLeft.className = 'unclickable';
        // buttonLeft.src = 'images/Pause.png';
        // buttonLeft.className = 'btn-pause';
    };

    setPauseBtn = () => {
        buttonLeft.src = 'images/Start.png';
        buttonLeft.className = 'btn-start';
    };

    setMuteBtn = () => {
        buttonRight.src = 'images/Unmute.png';
        buttonRight.className = 'btn-unmute';
    };

    setUnmuteBtn = () => {
        buttonRight.src = 'images/Mute.png';
        buttonRight.className = 'btn-mute';
    };

    //      TIME

    printTime = () => {
        let minutes = Math.floor(playTime / 60)
        let seconds = playTime % 60

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdown.textContent = `TIME: ${minutes}:${seconds}`
    };

    startTimer = (callback) => {
        interval = setInterval(() => {
            playTime--;
            if(playTime === 0) {
                endGame = true;
                clearInterval(interval)
            }
            callback();
        }, 1000);


    };

    timeup = () => {
        timeUp.className = 'game-finished';
        timeUp.removeAttribute('id');
        finalScore.textContent = scoreDiv.textContent;
    }

    //      SCORE

    addScore = () => {
        score += 5;
        if (score < 10) {
            scoreDiv.textContent = `SCORE: 000${score}`;
        } else if (score < 100 && score >= 10) {
            scoreDiv.textContent = `SCORE: 00${score}`;
        } else if (score < 1000 && score >= 100) {
            scoreDiv.textContent = `SCORE: 0${score}`;
        }
        totalScore = score;
        return totalScore;
    };

    whackMole = () => {
        addScore()
        lastMole.style.display = 'none';
    };

    //      GAME

    startGame = () => {
        startTimer(printTime);
        hideAllMoles();
        setTimeout(() => {
            showMoles();
        }, 500)
        setTimeout(endGame, endGameTime)
    };

    endGame = () => {
        clearTimeout()
        hideAllMoles();
        timeup();
    }
        
    

    //      BUTTONS

    moles.forEach((mole) => {
        mole.onclick = () => {
            whackMole();
            console.log('CLICK')
        };
    });

    buttonLeft.onclick = () => {
        if (buttonLeft.className === 'btn-start') {
            startGame();
            setStartBtn();
            myMusic.play();
            // } else if (buttonLeft.className === 'btn-pause') {
            //     setPauseBtn();
            //     setUnmuteBtn();
            //     myMusic.pause();
        }
    };

    buttonRight.onclick = () => {
        if (buttonRight.className === 'btn-mute') {
            setMuteBtn();
            myMusic.pause();
        } else if (buttonRight.className === 'btn-unmute') {
            setUnmuteBtn();
            myMusic.play();
        }
    };

});
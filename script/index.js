window.addEventListener('load', (event) => {

    //      VARIABLES
    let mixedMoles = [];
    let currentMole = '';
    let lastMole = '';
    let allMoles = document.querySelectorAll('.mole');
    let moles = [...allMoles];

    let buttonLeft = document.getElementById('button-left');
    let buttonRight = document.getElementById('button-right');
    let buttonRestart = document.getElementById('button-timeup');
    let buttons = document.getElementsByClassName('btn');
    let buttonNormal = buttons[0]
    let buttonFast = buttons[1]
    let buttonCrazy = buttons[2]
    let button90 = buttons[3]
    let button60 = buttons[4]
    let button30 = buttons[5]

    let time;
    let countdown = document.querySelector('#time');
    let interval = 0;
    let playTime = 60;
    let selectedTime;
    let timeUp = document.getElementById('timeup');

    let scoreDiv = document.getElementById('score');
    let score = 0;
    let totalScore = '';
    let finalScore = document.getElementById('final-score');

    let myMusic = new Audio('sounds/main-loop.mp3');
    myMusic.volume = 0.1;
    let smash = new Audio('sounds/Jump9.mp3');
    smash.volume = 0.5;
    let endSound = new Audio('sounds/timeup.mp3');
    endSound.volume = 0.1;

    let menu = document.getElementById('menu');
    let level = document.getElementById('level');


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
        let mole = shuffleMoles();
        mole.style.display = 'block';
        setTimeout(() => {
            mole.style.display = 'none';
            showMoles();
        }, time);
    };

    hideAllMoles = () => {
        moles.forEach((mole) => {
            mole.style.display = 'none';
        });
    };

    //      SET BUTTONS

    setStartBtn = () => {
        buttonLeft.src = 'images/Start2.png';
        buttonLeft.className = 'unclickable';
    };

    setMuteBtn = () => {
        buttonRight.src = 'images/Unmute.png';
        buttonRight.className = 'btn-unmute';
    };

    setUnmuteBtn = () => {
        buttonRight.src = 'images/Mute.png';
        buttonRight.className = 'btn-mute';
    };

    closeMenu = () => {
        menu.style.display = 'none';
    }

    setButton90 = () => {
        countdown.innerHTML = 'TIME: 01:30';
        playTime = 90;
        buttonLeft.src = 'images/Start.png';
        buttonLeft.className = 'btn-start';
        selectedTime = playTime
        return selectedTime;
    }

    setButton60 = () => {
        countdown.innerHTML = 'TIME: 01:00';
        playTime = 60;
        buttonLeft.src = 'images/Start.png';
        buttonLeft.className = 'btn-start';
        selectedTime = playTime
        return selectedTime;
    }

    setButton30 = () => {
        countdown.innerHTML = 'TIME: 00:30';
        playTime = 30;
        buttonLeft.src = 'images/Start.png';
        buttonLeft.className = 'btn-start';
        selectedTime = playTime
        return selectedTime;
    }

    setButtonNormal = () => {
        level.innerHTML = 'SPEED: NORMAL';
        time = randomTime(700, 2000);
    }

    setButtonFast = () => {
        level.innerHTML = 'SPEED: FAST';
        time = randomTime(550, 1200);
    }

    setButtonCrazy = () => {
        level.innerHTML = 'SPEED: CRAZY';
        time = randomTime(400, 800);
    }

    //      TIME

    printTime = () => {
        let minutes = Math.floor(selectedTime / 60)
        let seconds = selectedTime % 60

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdown.textContent = `TIME: ${minutes}:${seconds}`
    };

    startTimer = (callback) => {
        interval = setInterval(() => {
            selectedTime--;
            console.log(playTime)
            if (selectedTime <= 0) {
                clearInterval(interval)
            }
            callback();
        }, 1000);


    };

    timeup = () => {
        timeUp.className = 'game-finished';
        timeUp.removeAttribute('id');
        finalScore.textContent = scoreDiv.textContent;
        myMusic.pause();
        endSound.play();
    }

    removeTimeup = () => {
        timeUp.removeAttribute('class');
        timeUp.setAttribute('id', 'timeup');
        myMusic.play();
        endSound.pause();
    }

    //      SCORE

    addScore = () => {
        if(level.innerHTML === 'SPEED: NORMAL'){
            score += 5;
        } else if (level.innerHTML === 'SPEED: FAST') {
            score +=10;
        } else {
            score+=15;
        }
        
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

        setTimeout(() => {
            finishGame();
        }, selectedTime * 1000)
    };

    finishGame = () => {
        hideAllMoles();
        timeup();
    }

    //      BUTTONS

    moles.forEach((mole) => {
        mole.onclick = () => {
            whackMole();
            if (buttonRight.className === 'btn-mute') {
                smash.play();
            }
        };
    });

    buttonLeft.onclick = () => {
        if(buttonLeft.className === 'btn-start') {
            startGame();
            setStartBtn();
            closeMenu();
            myMusic.play();
        } else {
            buttonLeft.className !== 'unclickable';
        }
        
    };

    buttonRight.onclick = () => {
        if (buttonRight.className === 'btn-mute' && buttonLeft.className !== 'btn-start') {
            setMuteBtn();
            myMusic.pause();
            endSound.pause();
        } else if (buttonRight.className === 'btn-unmute') {
            setUnmuteBtn();
            myMusic.play();
        }
    };

    button90.onclick = () => {
        setButton90();
    };

    button60.onclick = () => {
        setButton60();
    }

    button30.onclick = () => {
        setButton30();
    }

    buttonNormal.onclick = () => {
        setButtonNormal();
    }

    buttonFast.onclick = () => {
        setButtonFast();
    }

    buttonCrazy.onclick = () => {
        setButtonCrazy();
    }

    buttonRestart.onclick = () => {
        location.reload()
    }

    //      CURSOR

    let mouseCursor = document.querySelector('#cursor');

    window.addEventListener('mousemove', moveCursor);

    function moveCursor(e) {  
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

    window.addEventListener('mousedown',() => {
        mouseCursor.src ='images/hammer2.png';
    })
        
    window.addEventListener('mouseup',() => {
        mouseCursor.src ='images/hammer.png';
    })
});
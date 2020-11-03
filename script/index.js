window.addEventListener('load', (event) => {

    //      VARIABLES
    let mixedMoles = [];
    let currentMole = '';
    let buttonLeft = document.getElementById('button-left');
    let buttonRight = document.getElementById('button-right');
    let myMusic = new Audio('images/main-loop.wav');
    myMusic.volume = 0.05;
    let allMoles = document.querySelectorAll('.mole');
    let moles = [...allMoles];
    let countdown = document.querySelector('#time');
    let playTime = 89;
    let scoreDiv = document.getElementById('score');
    let lastMole = '';
    let score = 0;
    let timeUp = document.getElementById('timeup');
    console.log(timeUp)


    //      FUNCIONES

    randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    };

    shuffleMoles = () => {
        mixedMoles = moles.sort((a, b) => 0.5 - Math.random());
        currentMole = mixedMoles[0];
        // console.log(currentMole)
        if (currentMole === lastMole) {
            console.log('Repetido')
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

    startTimer = () => {
        let timer = playTime,
            minutes, seconds;
        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            countdown.textContent = `TIME: ${minutes}:${seconds}`;

            if (--timer < 0) {
                timer = 0;
                return 0
            }
        }, 1000);
    };

   

    hideFirstMole = () => {
        if (moles[0].style.display === 'block') {
            moles[0].style.display = 'none';
        }
    };

    hideAllMoles = () => {
        moles.forEach((mole) => {
            mole.style.display = 'none';
        });
    };

    addScore = () => {
        score += 5;
        if (score < 10) {
            scoreDiv.textContent = `SCORE: 000${score}`;
        } else if (score < 100 && score >= 10) {
            scoreDiv.textContent = `SCORE: 00${score}`;
        } else if (score < 1000 && score >= 100) {
            scoreDiv.textContent = `SCORE: 0${score}`;
        }
    };

    whackMole = () => {
        addScore()
        lastMole.style.display = 'none';
    };

    startGame = () => {
        startTimer();
        hideAllMoles();
        endGame();
        setTimeout(() => {
            showMoles();
        }, 500)
    };

    endGame = () => {
        timeUp.className = 'game-finished';
    }

    //      BOTONES

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
window.addEventListener('load', (event) => {

    //      VARIABLES
    let mixedMoles = [];
    let currentMole = '';
    let buttonLeft = document.getElementById('button-left');
    let buttonRight = document.getElementById('button-right');
    let myMusic = new Audio('/images/main-loop.wav');
    myMusic.volume = 0.05;
    let allMoles = document.querySelectorAll('.mole');
    let moles = [...allMoles];
    let countdown = document.querySelector('#time');
    let score = document.getElementById('score');
    let lastMole = '';
    


    //      FUNCIONES

    randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    }

    shuffleMoles = () => {
        mixedMoles = moles.sort((a, b) => 0.5 - Math.random());
        currentMole = mixedMoles[0];
        // console.log(currentMole)
        if(currentMole === lastMole) {
            console.log('Repetido')
            shuffleMoles();
        }
        lastMole = currentMole;
        return currentMole;
    };

    showMoles = () => {
        let time = randomTime(500, 1000);
        let mole = shuffleMoles();
        mole.style.display = 'block';
        setTimeout(() => {
            mole.style.display = 'none';
            showMoles();
        }, time)
    }

    setStartBtn = () => {
        buttonLeft.src = '/images/Pause.png';
        buttonLeft.className = 'btn-pause';
    }

    setPauseBtn = () => {
        buttonLeft.src = '/images/Start.png';
        buttonLeft.className = 'btn-start';
    }

    setMuteBtn = () => {
        buttonRight.src = '/images/Unmute.png';
        buttonRight.className = 'btn-unmute';
    }

    setUnmuteBtn = () => {
        buttonRight.src = '/images/Mute.png';
        buttonRight.className = 'btn-mute';
    }

    startTimer = () => {
        let timer = 5, minutes, seconds;
        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            countdown.textContent = `TIME: ${minutes}:${seconds}`;
    
            if (--timer < 0) {
                timer = 0;
            }
        }, 1000);
    }

    hideAllMoles = () => {
        moles.forEach((mole) => {
            mole.style.display = 'none';
        });
    };

    // timeUp = () => {
    //     if(countdown.textContent === '00:00') {
    //         console.log('TIME UP!')
    //     }
    // }

    startGame = () => {
        startTimer();
        hideAllMoles();
        showMoles();
        // setInterval(() => { // aparecen varios topos a la vez => NIVEL DIFÍCIL
        //     showMoles();
        // }, 2000);
    };

    

    //      BOTONES

    document.addEventListener('keydown', (event) => {
        if (event.key === 'w') {
            whackMole()
        }
    })

    buttonLeft.onclick = () => {
        if (buttonLeft.className === 'btn-start') {
            startGame();
            setStartBtn();
            myMusic.play();
        } else if (buttonLeft.className === 'btn-pause') {
            // pauseGame();
            setPauseBtn();
            setUnmuteBtn();
            myMusic.pause();
        }
    };

    buttonRight.onclick = () => {
        if (buttonRight.className === 'btn-mute' && buttonLeft.className === 'btn-pause') {
            setMuteBtn();
            myMusic.pause();
        } else if (buttonRight.className === 'btn-unmute') {
            setUnmuteBtn();
            myMusic.play();
        }
    };

    

    // if (document.getElementById('moles').src === '/images/Mole0.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'w') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole1.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 's') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole2.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'z') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole3.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'e') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole4.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'd') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole5.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'x') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole6.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'r') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole7.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'f') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // } else if (document.getElementById('moles').src === '/images/Mole8.png') {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'c') {
    //             document.getElementById('moles').src = '/images/Background.png';
    //         }
    //     })
    // }
})
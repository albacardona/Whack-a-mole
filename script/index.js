window.addEventListener('load', (event) => { //ON CLICK DESPUÉS
    const moles = [
        'Mole0.png',
        'Mole1.png',
        'Mole2.png',
        'Mole3.png',
        'Mole4.png',
        'Mole5.png',
        'Mole6.png',
        'Mole7.png',
        'Mole8.png',
    ];


//      VARIABLES
    let mixedMoles = [];
    let currentMole = '';
    let buttonLeft = document.getElementById('button-left');
    let buttonRight = document.getElementById('button-right');
    let score = document.getElementById('score');
    let myMusic = new Audio('/images/main-loop.wav');

//      FUNCIONES

    shuffleMoles = () => {
        mixedMoles = moles.sort((a, b) => 0.5 - Math.random());
        currentMole = mixedMoles[0];
    };

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


    startGame = () => {
        setInterval(() => {
            shuffleMoles();
            document.getElementById('moles').src = `/images/${currentMole}`;
            console.log(currentMole)
        }, 2000);
    };

    whackMole = () => {
        if (document.getElementById('moles').src === '/images/Mole0.png') {
            document.getElementById('moles').src = '/images/Background.png';
        };
    };


//      BOTONES

    document.addEventListener('keydown', (event) => {
        if (event.key === 'w') {
            whackMole()
        }
    })

    buttonLeft.onclick = () => {
        if(buttonLeft.className === 'btn-start') {
            startGame();
            setStartBtn();
            myMusic.play();
        } else if(buttonLeft.className === 'btn-pause') {
            // pauseGame();
            setPauseBtn();
            setUnmuteBtn();
            myMusic.pause();
        }
    };

    buttonRight.onclick = () => {
        if(buttonRight.className === 'btn-mute' && buttonLeft.className === 'btn-pause') {
            setMuteBtn();
            myMusic.pause();
        } else if(buttonRight.className === 'btn-unmute') {
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



    // document.addEventListener('keydown', (event) => {
    //     switch (event.code) {
    //         case 'KeyW':
    //             if (document.getElementById('moles').src === '/images/Mole0.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyS':
    //             if (document.getElementById('moles').src === '/images/Mole1.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyZ':
    //             if (document.getElementById('moles').src === '/images/Mole2.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyE':
    //             if (document.getElementById('moles').src === '/images/Mole3.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyD':
    //             if (document.getElementById('moles').src === '/images/Mole4.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyX':
    //             if (document.getElementById('moles').src === '/images/Mole5.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyR':
    //             if (document.getElementById('moles').src === '/images/Mole6.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyF':
    //             if (document.getElementById('moles').src === '/images/Mole7.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //         case 'KeyC':
    //             if (document.getElementById('moles').src === '/images/Mole8.png') {
    //                 document.getElementById('moles').src = '/images/Background.png';
    //             }
    //         break;
    //     };
    // });


})
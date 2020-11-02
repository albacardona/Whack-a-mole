// window.addEventListener('load', (event) => { //ON CLICK DESPUÉS
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

    let mixedMoles = [];
    let currentMole = '';
    let startButton = document.getElementById('start-button')
    let myMusic = new Audio ('/images/main-loop.wav')


    shuffleMoles = () => {
        mixedMoles = moles.sort((a, b) => 0.5 - Math.random());
        currentMole = mixedMoles[0];
    };

    startButton.onclick = () => {
        startGame();
        startButton.style.display = 'none';
        myMusic.play();
    };

    startGame = () => {
        setInterval(() => {
            shuffleMoles();
            document.getElementById('moles').src = `/images/${currentMole}`;
        }, 2000);
    };

    whackMole = () => {
        document.getElementById('moles').src = '/images/Background.png';
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


// })
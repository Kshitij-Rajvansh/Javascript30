// window.addEventListener('keydown', function (e) {
//     const audioElem = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const audioKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audioElem){
//         return;
//     }

//     audioElem.currentTime = 0;
//     audioElem.play();
//     audioKey.classList.add('playing');
//     console.log(e.keyCode);
// });


window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
})
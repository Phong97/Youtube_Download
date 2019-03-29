// const text = baffle('.header').start();
// text.set({
//   characters : '~!*()-+=[]{}|/<>?',
//   speed: 100
// });
// text.start();
// text.reveal(5000);

window.onload = () => {
    baffle('.header', {
        characters: '~!@#$%^&*()-+=[]{}|;:,./<>?',
        speed: 100
    }).start().reveal(3000);
};

document.querySelector(".download-button").addEventListener('click', () => {
    var url = document.querySelector(".link-input").value;
    if ( url !== "") {
        window.location.href = `http://localhost:3000/download?url=${url}`;
    }
});

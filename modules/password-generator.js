
function generatePass(n) {
    const passDisplay = document.getElementById('password-display');

    let pass = '';
    let str = 'ABCDEFGHIGJKLMNOPQRSTUVWXYZ' + 
    'abcdefghijklmnopqrstuvwxyz1234567890!@#$';

    for (let i = 1; i <= n; i++) {
        let char = Math.floor(Math.random() * str.length + 1) // Get random integer within the length of str
        pass += str.charAt(char)
    }
    passDisplay.innerHTML = pass
}

function passwordGeneratorMain() {
    const generate8Btn = document.getElementById('generate8-button');
    const generate16Btn = document.getElementById('generate16-button');
    generate8Btn.addEventListener('click', () => generatePass(8)) // wrap generatePass with an arrow function in order to pass parameter
    generate16Btn.addEventListener('click', () => generatePass(16))

}

export default passwordGeneratorMain